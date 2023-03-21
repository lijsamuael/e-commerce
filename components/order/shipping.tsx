import Header from "./header";

export default function Shipping(){
    return(
        <div className="border border-black px-[5%] space-y-8 h-full">
          <Header name="Shipping" order={2} required={true}></Header>
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col px-4 space-y-2 pb-4 w-full">
              <p className="text-lg ">EMAIL *</p>
              <input
                className=" bg-gray-100 px-4 py-[10px] w-full"
                type="text"
              />
            </div>
            <div className="flex flex-col px-4 space-y-2 w-full">
              <p className="text-lg ">FULL NAME *</p>
              <input
                className=" bg-gray-100 px-4 py-[10px] w-full"
                type="text"
              />
            </div>
            <div className="flex flex-col px-4 space-y-2 w-full">
              <p className="text-lg ">STREET ADRESS *</p>
              <div className="space-y-4">
                <input
                  className=" bg-gray-100 px-4 py-[10px] w-full"
                  type="text"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-2  xl:grid-cols-3 sm:flex-row lg:flex-col xl:flex-row gap-y-4">
              <div className="col-span-1  flex flex-col px-4 space-y-2 w-full">
                <p className="text-lg whitespace-nowrap">CITY *</p>
                <input
                  className=" bg-gray-100 px-4 py-[10px] w-full"
                  type="text"
                />
              </div>
              <div className="col-span-1  flex flex-col px-4 space-y-2 w-full">
                <p className="text-lg ">STATE/PROVINCE *</p>
                <input
                  className=" bg-gray-100 px-4 py-[10px] w-full"
                  type="text"
                />
              </div>
              <div className="col-span-1 lg:col-span-3 xl:col-span-1 flex flex-col px-4 space-y-2 w-full grid-flow-row">
                <p className="text-lg whitespace-nowrap">ZIP/POSTAL CODE *</p>
                <input
                  className=" bg-gray-100 px-4 py-[10px] w-full"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col px-4 space-y-2 w-full">
              <p className="text-lg ">COUNTRY *</p>
              <input
                className=" bg-gray-100 px-4 py-[10px] w-full"
                type="text"
                placeholder="United States"
              />
            </div>
          </form>
          <div className="w-full px-4 pb-16 pt-8" >
            <p className="text-lg ">
              No shipping methods are avialable for the adress given.
            </p>
          </div>
        </div>
    );
}