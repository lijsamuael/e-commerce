export default function Shipping(){
    return(
        <div className="border border-black px-[5%] space-y-16 h-full">
          <div className="border-b border-gray-400 py-8 flex justify-between items-center">
            <h3 className="text-2xl">2. Shipping</h3>
            <p>* Required</p>
          </div>
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
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row ">
              <div className="flex flex-col px-4 space-y-2 w-full">
                <p className="text-lg whitespace-nowrap">CITY *</p>
                <input
                  className=" bg-gray-100 px-4 py-[10px] w-full"
                  type="text"
                />
              </div>
              <div className="flex flex-col px-4 space-y-2 w-full">
                <p className="text-lg whitespace-nowrap">STATE/PROVINCE *</p>
                <input
                  className=" bg-gray-100 px-4 py-[10px] w-full"
                  type="text"
                />
              </div>
              <div className="flex flex-col px-4 space-y-2 w-full">
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
          <div className="w-full px-4 pb-16">
            <p className="text-lg ">
              No shipping methods are avialable for the adress given.
            </p>
          </div>
        </div>
    );
}