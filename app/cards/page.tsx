import Card from "@/components/cards/card";

export default function Cards() {
    const shirts = [
        {
        "name": "Ripple Button UP",
        "image": "",
        "tag": "New Arrival",
        "price": 23.87,
        "color": "red",
        "rate": 4.9,
        "icon": ""
        }
    ]
  return (
    <div className="flex flex-col">
      <h1>New Arrivals</h1>
      {/* <Card></Card> */}
      <h1>Swim</h1>
      {/* <Card></Card> */}
      <h1>Best Sellers</h1>
      {/* <Card></Card> */}
    </div>
  );
}
