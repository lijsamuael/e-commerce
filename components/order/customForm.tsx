import { shipping, payment } from "./inputs";

export default function CustomForm({
  form,
}: {
  form: {
    name: string;
    order: number;
    required: boolean;
    warning: string;
    inputs: {
      size: number;
      heading: {
        name: string;
        placeholder: string;
        type: string;
        class: string;
      }[];
      required: boolean;
      class: string;
    }[];
  };
}) {
  return (
    <>
      <div className="border border-black px-[5%] py-8 space-y-8 h-full ">
        <div className="border-b border-gray-400 py-8 flex justify-between items-center">
          <h3 className="text-2xl">
            {form.order}. {form.name}
          </h3>
          {form.required ? <p>* Required</p> : null}
        </div>
        <form className="flex flex-col space-y-4">
          {form.inputs.map((input) =>
            input.size == 1 ? (
              <div className="flex flex-col px-4 space-y-2 pb-4 w-full">
                  {input.heading.map((data) => (
                    <>
                      <p className="text-lg ">{data.name} *</p>
                      <input
                        className=" bg-gray-100 px-4 py-[10px] w-full"
                        type="text"
                        placeholder={data.placeholder}
                      />
                    </>
                  ))}{" "}
              </div>
            ) : (
              <div className={`${input.class}`}>
                {input.heading.map((data) => (
                  <div
                    className={`${data.class} col-span-1  flex flex-col px-4 space-y-2 w-full`}
                  >
                    <p className="text-lg whitespace-nowrap">{data.name} *</p>
                    <input
                      className=" bg-gray-100 px-4 py-[10px] w-full"
                      type={`${data.type}`}
                      placeholder={`${data.placeholder}`}
                    />
                  </div>
                ))}
              </div>
            )
          )}
        </form>
        <div className="w-full px-4 pb-16 pt-8">
          <p className="text-lg ">{form.warning}</p>
        </div>
      </div>
    </>
  );
}
