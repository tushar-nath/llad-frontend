import { useTable } from "react-table";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { FrontCard } from "../revision/FrontCard";
import { BackCard } from "../revision/BackCard";

export const Table = ({ columns, data }: any) => {
  const [showCardPreview, setShowCardPreview] = useState<any>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columns, data });

  return (
    <>
      <table
        {...getTableProps()}
        className="w-full table shadow-[1px_4px_22.299999237060547px_0px_#00000040] rounded-3xl bg-white"
      >
        <thead>
          {headerGroups.map((headerGroup: any, index: number) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={`header-group-${index}`}
            >
              {headerGroup.headers.map((column: any, columnIndex: number) => (
                <th
                  {...column.getHeaderProps()}
                  key={`header-${columnIndex}`}
                  className="text-xs font-medium bg-white text-left text-gray-700 px-5 py-2 h-12 border-b border-gray-200 rounded-t-3xl sticky top-0"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any, rowIndex: any) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={`row-${rowIndex}`}
                className="h-20 hover:bg-gray-50 transition-colors duration-300"
              >
                {row.cells.map((cell: any, cellIndex: number) => (
                  <td
                    {...cell.getCellProps()}
                    key={`row-${rowIndex}-cell-${cellIndex}`}
                    className={`px-5 font-medium ${
                      cellIndex >= 2 && cellIndex <= 5
                        ? "font-semibold text-md"
                        : ""
                    } ${
                      cellIndex === 0
                        ? "text-gray-500 text-sm"
                        : "font-semibold"
                    } ${cellIndex === 0 ? "text-sm truncate" : ""}`}
                    onClick={() => setShowCardPreview(row.original)}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {showCardPreview && (
        <div
          className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50"
          onClick={(e: any) => {
            if (e.target.id !== "card-preview") return;
            setShowCardPreview(null);
          }}
        >
          <div
            id="card-preview"
            className="flex justify-center items-center w-full h-full"
          >
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <FrontCard
                key="front"
                card={showCardPreview}
                setIsFlipped={setIsFlipped}
              />
              <BackCard
                key="back"
                card={showCardPreview}
                setIsFlipped={setIsFlipped}
              />
            </ReactCardFlip>
          </div>
        </div>
      )}
    </>
  );
};
