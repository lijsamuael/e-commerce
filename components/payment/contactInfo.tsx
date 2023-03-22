import Link from "next/link";

export default function ContactInfo() {
  return (
    <div className="flex flex-col w-full space-y-4">
      <div className="flex justify-between items-center ">
        <h3 className="text-2xl font-medium">Contact Information</h3>
        <div className="flex space-x-2">
          <p>Already have an account?</p>
          <Link href={""} className="text-blue-500">Log in</Link>
        </div>
      </div>
      <div className="pt-4">
        <input type="email" placeholder="Email" className="border rounded-lg p-4 w-full" />
      </div>
      <div className="flex space-x-4 items-center">
      <input type="checkbox" className="w-6 h-6 rounded-full" />
        <span>Email with me news and offers</span>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
