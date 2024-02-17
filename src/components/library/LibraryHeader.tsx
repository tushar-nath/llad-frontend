import { LibraryFilters } from "./LibraryFilters";
import { LibraryQuickRevision } from "./LibraryQuickRevision";
import { LibrarySearchBar } from "./LibrarySearchBar";

interface LibraryHeaderProps {
  handleSearch: (search: string) => void;
}

export const LibraryHeader = ({ handleSearch }: LibraryHeaderProps) => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <LibrarySearchBar handleSearch={handleSearch} />
      <LibraryFilters />
      <LibraryQuickRevision />
    </div>
  );
};
