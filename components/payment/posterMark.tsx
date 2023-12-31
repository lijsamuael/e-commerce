export default function PosterMark() {
  return (
    <div className="flex flex-col self-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-[75px] h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute  after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
          <span className="text-white font-semibold text-sm absolute inset-y-0 left-1 flex items-center justify-center w-5/12 h-full rounded-full transition-all">
            ON
          </span>
          <span className="text-black font-semibold text-sm absolute inset-y-0 right-1 flex items-center justify-center w-5/12 h-full rounded-full transition-all">
            OFF
          </span>
        </div>
      </label>
    </div>
  );
}
