import Warnning from "./warnning";
import countries from "./countries";

export default function AdressForm() {
  return (
    <div className="flex flex-col self-start w-full gap-y-4">
      <h2 className="text-xl font-medium">Shipping Address</h2>
      <Warnning message="Please check your address to ensure accurate delivery." />
      <form action="" className="flex flex-col text-gray-600 gap-4">
        <select name="" id="" className="border rounded-lg p-4 w-full">
          <option selected>Country/Region</option>
          {countries.map((country) => (
            <option value={country.name}>{country.name}</option>
          ))}
        </select>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First name"
            className="border rounded-lg p-4 w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border rounded-lg p-4 w-full"
          />
        </div>
        <input
          type="text"
          placeholder="Adress"
          className="border rounded-lg p-4 w-full"
        />
        <p className="font-semibold px-4">
          Heads up, once an order has been placed we can not cancel or make
          changes.
        </p>
        <input
          type="text"
          placeholder="Appartment, suit, etc. (optional)"
          className="border rounded-lg p-4 w-full"
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="City"
            className="border rounded-lg p-4 w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="border rounded-lg p-4 w-full"
          />
          <input
            type="text"
            placeholder="ZIP code"
            className="border rounded-lg p-4 w-full"
          />
        </div>
        <div className="flex justify-between border rounded-lg p-4 w-full items-center">
          <input
            type="text"
            placeholder="Phone"
            className=""
          />
          <img src="./icons/question-mark-circle.png" alt="" className="w-4 h-4 " />
        </div>
      </form>
    </div>
  );
}
