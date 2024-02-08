import { SearchIcon } from "../../svgs/searchIcon";

export const LibrarySearchBar = () => {
  return (
    <div className="flex flex-row items-center gap-4 bg-white px-4 py-2.5 border border-gray-300 hover:border-gray-400 transition-colors duration-300 rounded-[3rem] shadow-lg">
      <SearchIcon />
      <input
        type="text"
        className="w-44 rounded-lg text-lg font-medium focus:outline-none focus:border-bluePrimary"
        placeholder="Search"
      />
    </div>
  );
};
