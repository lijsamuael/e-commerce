export default function PostersPage() {
  const posters = [
    {
      id:  1,
      name: "Voyeger 1",
      price: "49.99",
      tag: "Free Shipping",
      dimension: "24in x 34in",
      img: "imgURL",
      description:
        "Voyager 1 is spce probe lunched by NASA on September 5, 1997. Part of the Voyager program to study the outer solar system, Voyager 1 was lunched 16 days after its twin, Voyager 2.",
    },
    {
      id: 2,
      name: "Voyeger 2",
      price: "49.99",
      tag: "Free Shipping",
      dimension: "24in x 34in",
      img: "imgURL",
      description:
        "Voyager 2 is spce probe lunched by NASA on September 5, 1997. Part of the Voyager program to study the outer solar system, Voyager 1 was lunched 16 days after its twin, Voyager 2.",
    },
  ];

  return (
    <div className="flex flex-col pt-8 sm:mr-0 sm:ml-8  md:mr-0 md:ml-8 lg:mr-[1%] lg:ml-[4%] gap-y-16">
      <h1 className="text-4xl mx-auto">Posters</h1>
        {posters.map((poster) => (
                <div className="flex mb-8 " key={poster.id}>
                <img
                  className="self-center relative z-10 hidden sm:block sm:h-80 md:h-full w-[40%]  "
                  src="./image1.png"
                  alt="posterImage"
                />
                <div className="flex flex-col justify-center relative sm:right-[50px] md:top-[40px]  lg:top-[60px]  xl:top-[40px] border border-black w-full px-4 mx-4 sm:mx-0  sm:pl-24 sm:pr-8 py-8 space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold">{poster.name}</h2>
                    <p className="text-lg">$ {poster.price} USD</p>
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
                    <p className="line-clamp-3">{poster.description}</p>
                    <p>Dimensions: {poster.dimension}</p>
                  </div>
                  <div className="flex flex-wrap md:flex-nowrap gap-y-4 gap-x-2 lg:gap-x-4">
                    <span className="border border-black px-[26px] py-4 ">1</span>
                    <button className="border border-black px-[26px] py-4 whitespace-nowrap">
                      Add to Card
                    </button>
                    <button className="border bg-black px-[26px] py-4 text-white whitespace-nowrap">
                      Buy Now
                    </button>
                  </div>
                  <div className="">
                    <button className="text-gray-500 border-b border-gray-500 border-dashed whitespace-nowrap">
                      More Photos
                    </button>
                  </div>
                </div>
              </div>
        ) )}
    </div>
  );
}
