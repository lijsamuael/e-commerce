export default function Payment(){
    return(
        <div className="border border-black px-[5%] py-8 space-y-16 h-full">
          <div className="border-b border-gray-400  flex justify-between items-center">
            <h3 className="text-2xl">3. Payment</h3>
            <p>* Required</p>
          </div>
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
            <div className="w-full px-4 py-8">
              <p className=" ">Billing adress sava as shipping.</p>
            </div>
          </form>
        </div>
    );
}