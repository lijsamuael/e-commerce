import Posters from "@/components/poster/posters";

export default function PostersPage() {
  const posters = [
    {
      id: 1,
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

  return (<Posters posters={posters} />);
}
