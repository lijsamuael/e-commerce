import Card from "@/components/cards/card";

export default function Cards() {
  const shirts = [
    {
      name: "Ripple Button UP",
      image: "shirt1.png",
      tag: true,
      tagName: "New",
      price: 59.0,
      color: "red-700",
      rating: false,
    },
    {
      name: "Ripple Button UP",
      image: "shirt2.png",
      tag: true,
      tagName: "New",
      price: 23.87,
      color: "black",
      rating: false,
    },
    {
      name: "Ripple Button UP",
      image: "shirt3.png",
      tag: true,
      tagName: "New",
      price: 23.87,
      color: "black",
      rating: false,
    },
    {
      name: "Ripple Button UP",
      image: "shirt4.png",
      tag: true,
      tagName: "New",
      price: 23.87,
      color: "black",
      rating: false,
    },
  ];

  const shorts = [
    {
      name: "Tracker",
      image: "short1.png",
      tag: false,
      tagName: "",
      price: 59.0,
      color: "black",
      rating: false,
    },
    {
      name: "Tracker",
      image: "short2.png",
      tag: false,
      tagName: "",
      price: 23.87,
      color: "black",
      rating: false,
    },
    {
      name: "Tracker",
      image: "short3.png",
      tag: false,
      tagName: "",
      price: 23.87,
      color: "black",
      rating: false,
    },
    {
      name: "Tracker",
      image: "short4.png",
      tag: false,
      tagName: "",
      price: 23.87,
      color: "black",
      rating: false,
    },
  ];

  const bests = [
    {
      name: "Animalze",
      image: "short5.png",
      tag: false,
      tagName: "",
      price: 59.0,
      color: "black",
      rating: true,
    },
    {
      name: "Balt Hat",
      image: "cape1.png",
      tag: false,
      tagName: "",
      price: 23.87,
      color: "black",
      rating: false,
    },
    {
      name: "Big Cat",
      image: "short6.png",
      tag: false,
      tagName: "",
      price: 23.87,
      color: "black",
      rating: false,
    },
    {
      name: "Cubz Button Up",
      image: "shirt5.png",
      tag: false,
      tagName: "",
      price: 23.87,
      color: "black",
      rating: false,
    },
  ];

  return (
    <div className="mx-auto max-w-[1500px] px-[5%] ">
      <div className="flex flex-col space-y-4  py-8">
        <h1 className="text-center text-3xl font-bold">New Arrivals</h1>
        <div className="space-y-8">
          <div className="grid grid-cols-1 ssm:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {shirts.map((shirt) => (
              <Card
                name={shirt.name}
                image={shirt.image}
                tag={shirt.tag}
                tagName={shirt.tagName}
                price={shirt.price}
                color={shirt.color}
                rating={shirt.rating}
              />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button className="text-sm border-b border-black inline-block">
              VIEW COLLECTION
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4  py-8">
        <h1 className="text-center text-3xl font-bold">Swim</h1>
        <div className="space-y-8">
          <div className="grid grid-cols-1 ssm:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {shorts.map((short) => (
              <Card
                name={short.name}
                image={short.image}
                tag={short.tag}
                price={short.price}
                color={short.color}
                rating={short.rating}
              />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button className="text-sm border-b border-black inline-block">
              VIEW COLLECTION
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4  py-16">
        <h1 className="text-center text-3xl font-bold">Best Sellers</h1>
        <div className="space-y-8">
          <div className="grid grid-cols-1 ssm:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {bests.map((best) => (
              <Card
                name={best.name}
                image={best.image}
                tag={best.tag}
                price={best.price}
                color={best.color}
                rating={best.rating}
              />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button className="text-sm border-b border-black inline-block">
              VIEW COLLECTION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
