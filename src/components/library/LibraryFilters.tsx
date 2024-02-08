import { PlusIcon } from "../../svgs/plusIcon";

export const LibraryFilters = () => {
  return (
    <div className="flex flex-row items-center gap-4 bg-white px-4 py-3 border border-gray-300 hover:border-gray-400 transition-colors duration-300 rounded-[3rem] shadow-lg">
      <PlusIcon />
      <select
        className="rounded-lg text-lg font-medium focus:outline-none focus:border-bluePrimary"
        name="filters"
        id="filters"
      >
        <option value="all">Add New</option>
        <option value="recent">Recent</option>
        <option value="most-viewed">Most Viewed</option>
      </select>
    </div>
  );
};
