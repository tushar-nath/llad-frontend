import { LibraryFilters } from "./LibraryFilters";
import { LibraryQuickRevision } from "./LibraryQuickRevision";
import { LibrarySearchBar } from "./LibrarySearchBar";

export const LibraryHeader = () => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <LibrarySearchBar />
      <LibraryFilters />
      <LibraryQuickRevision />
    </div>
  );
};
