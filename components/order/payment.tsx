import Header from "./header";

export default function Payment() {
  return (
    <div className="border border-black px-[5%] py-8 space-y-8 h-full">
      <Header name="Payment" order={3} required={true}></Header>

      <form className="flex flex-col space-y-4">
        <div className="flex flex-col px-4 space-y-2 w-full">
          <p className="text-lg ">CARD NUMBER *</p>
          <input
            className=" bg-gray-100 px-4 py-[10px] w-full"
            type="text"
            maxLength={19}
            placeholder="XXXX XXXX XXXX XXXX"
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col px-4 space-y-2 w-full">
            <p className="text-lg ">EXPIRATION DATE *</p>
            <input
              className=" bg-gray-100 px-4 py-[10px] w-full"
              type="year month"
              placeholder="MM/YY"
            />
          </div>
          <div className="flex flex-col px-4 space-y-2 w-full">
            <p className="text-lg ">SECURITY CODE *</p>
            <input
              className=" bg-gray-200 px-4 py-[10px] w-full"
              type="text"
              placeholder="CVC"
            />
          </div>
        </div>
        <div className="w-full px-4 py-2">
          <p className=" ">Billing adress sava as shipping.</p>
        </div>
      </form>
    </div>
  );
}
