export default function Card({
  name,
  image,
  tag,
  tagName,
  price,
  color,
  rating,
}: {
  name: string;
  image: string;
  tag?: boolean;
  tagName?: string;
  price: number;
  color: string;
  rating?: boolean;
}) {
  return (
    <div className="space-y-4 ">
      <div className="flex flex-col bg-gray-100 max-w-72  p-4 gap-y-16 shrink">
        <div className="self-start bg-white border border-gray-200">
          {tag ? <p className="px-3 py-2 ">{tagName}</p> : null}
        </div>
        <div>
          <img src={`./images/${image}`} alt="" />
        </div>
        <div className="self-end rounded-full bg-white inline-block w-8 p-2">
          <img src="./icons/three-dots.svg" alt="More" className="" />
        </div>
      </div>
      {rating ? (
        <div className="space-y-2 w-72 shrink">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">{name}</h3>
            <h4>${price}</h4>
          </div>
          <div className="flex w-12 h-4">
            <img src="./icons/star.svg" alt="" />
            <img src="./icons/star.svg" alt="" />
            <img src="./icons/star.svg" alt="" />
            <img src="./icons/star.svg" alt="" />
            <img src="./icons/star.svg" alt="" />
          </div>
          <div
            className={` bg-${color} rounded-full inline-block w-6 h-6 p-2`}
          ></div>
        </div>
      ) : (
        <div className="space-y-2 w-72 shrink">
          <h3 className="text-xl font-semibold">{name}</h3>
          <h4>${price}</h4>

          <div
            className={` bg-${color} rounded-full inline-block w-6 h-6 p-2`}
          ></div>
        </div>
      )}
    </div>
  );
}
