import { LibraryFilters } from "./LibraryFilters";
import { LibraryQuickRevision } from "./LibraryQuickRevision";
import { LibrarySearchBar } from "./LibrarySearchBar";
import { LibraryStarredFilter } from "./LibraryStarredFilter";

interface LibraryHeaderProps {
  handleSearch: (search: string) => void;
  handleFilterByStarred: () => void;
}

export const LibraryHeader = ({
  handleSearch,
  handleFilterByStarred,
}: LibraryHeaderProps) => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <LibrarySearchBar handleSearch={handleSearch} />
      <LibraryFilters />
      <LibraryQuickRevision />
      <LibraryStarredFilter handleFilterByStarred={handleFilterByStarred} />
    </div>
  );
};
