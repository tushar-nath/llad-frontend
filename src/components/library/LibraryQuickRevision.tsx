import { ResetIcon } from "../../svgs/resetIcon";

export const LibraryQuickRevision = () => {
  return (
    <div className="flex flex-row items-center gap-4 bg-white px-4 py-3 border border-gray-300 hover:border-gray-400 transition-colors duration-300 rounded-[3rem] shadow-lg">
      <ResetIcon />
      <select
        className="rounded-lg text-lg font-medium focus:outline-none focus:border-bluePrimary w-44"
        name="filters"
        id="filters"
      >
        <option value="all">Quick Revision</option>
        <option value="recent">Recent</option>
        <option value="most-viewed">Most Viewed</option>
      </select>
    </div>
  );
};
