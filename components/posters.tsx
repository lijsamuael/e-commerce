export default function Posters({posters}: {posters: any}) {
    return (
      <div className="flex flex-col pt-8 sm:mr-0 sm:ml-8  md:mr-0 md:ml-8 lg:mr-[1%] lg:ml-[4%] gap-y-16">
        <h1 className="text-4xl mx-auto">Posters</h1>
        {posters.map((poster: any) => (
          <div className="flex mb-8 " key={poster["id"]}>
            <img
              className="self-center relative z-10 hidden sm:block sm:h-80 md:h-full w-[30%] min-w-full sm:min-w-[35%] md:min-w-[33%] mmd:min-w-[30%] lg:min-w-0 lg:w-[40%]  "
              src="./image1.png"
              alt="posterImage"
            />
            <div className="flex flex-col justify-center relative sm:right-[50px] md:top-[80px] mmd:top-[80px]  lg:top-[60px]  xl:top-[40px] border border-black w-full px-4 mx-4 sm:mx-0  sm:pl-24 sm:pr-8 py-8 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold">{poster["name"]}</h2>
                <p className="text-lg">$ {poster["price"]} USD</p>
                <span className="text-white px-2 py-1 bg-red-400 inline-block text-xs ">
                  FREE SHIPPING
                </span>
              </div>
              <img
                className="relative block w-full sm:hidden"
                src="./image1.png"
                alt="posterImage"
              />
  
              <div className=" flex flex-col space-y-4">
                <p className="line-clamp-3">{poster["description"]}</p>
                <p>Dimensions: {poster["dimension"]}</p>
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-y-4 gap-x-2 lg:gap-x-4 ">
                <span className="border border-black px-[26px] py-4">1</span>
                <button className="border bg-black px-[26px] py-4 text-white whitespace-nowrap flex-grow ssm:flex-none">
                  Buy Now
                </button>
                <button className="border border-black px-[26px] py-4 whitespace-nowrap ssm:flex order-last w-full ssm:w-auto">
                  Add to Cart
                </button>
              </div>
  
              <div className="">
                <button className="text-gray-500 border-b border-gray-500 border-dashed whitespace-nowrap ">
                  More Photos
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  