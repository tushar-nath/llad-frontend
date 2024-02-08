import { ResetIcon } from "../../svgs/resetIcon";

export const LibraryQuickRevision = () => {
  return (
    <div className="flex flex-row items-center gap-4 bg-white px-4 py-3 border border-gray-300 hover:border-gray-400 transition-colors duration-300 rounded-[3rem] shadow-lg">
      <ResetIcon />
      <select
        className="rounded-lg text-lg focus:outline-none focus:border-bluePrimary w-44 text-gray-900 font-medium"
        name="filters"
        id="filters"
      >
        <option value="all">Quick Revision</option>
        <option value="today">Today</option>
        <option value="last-week">Last Week</option>
        <option value="last-15-days">Last 15 Days</option>
        <option value="last-30-days">Last 30 Days</option>
      </select>
    </div>
  );
};
