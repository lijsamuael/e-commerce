import Card from "@/components/cards/card";
import Carousel from "@/components/cards/carousel";

import data from "../../model/data.json";


export default function Cards() {
  return (
    <div className="mx-auto  px-[5%] ">
      <Carousel heading="New Arrivals">
        {data.shirts.map((shirt) => (
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
      </Carousel>
      <Carousel heading="Swim">
        {data.shorts.map((short) => (
          <Card
            name={short.name}
            image={short.image}
            tag={short.tag}
            price={short.price}
            color={short.color}
            rating={short.rating}
          />
        ))}
      </Carousel>
      <Carousel heading="Best Sellers">
        {data.bests.map((best) => (
          <Card
            name={best.name}
            image={best.image}
            tag={best.tag}
            price={best.price}
            color={best.color}
            rating={best.rating}
          />
        ))}
      </Carousel>
    </div>
  );
}
