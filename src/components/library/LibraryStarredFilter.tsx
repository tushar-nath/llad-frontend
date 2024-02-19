export const LibraryStarredFilter = ({
  handleFilterByStarred,
}: {
  handleFilterByStarred: any;
}) => {
  return (
    <div className="flex flex-row items-center gap-4 bg-white px-4 py-3 border border-gray-300 hover:border-gray-400 transition-colors duration-300 rounded-[3rem] shadow-lg">
      <input
        type="checkbox"
        id="starred"
        name="starred"
        value="starred"
        className="h-5 w-5 appearance-none border border-gray-300 rounded-full checked:bg-bluePrimary checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bluePrimary"
        onChange={handleFilterByStarred}
      />
      <label htmlFor="starred" className="text-lg text-gray-900 font-medium">
        Starred
      </label>
    </div>
  );
};
