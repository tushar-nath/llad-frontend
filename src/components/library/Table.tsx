import { useSortBy, useTable } from "react-table";
import { useContext, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { FrontCard } from "../revision/FrontCard";
import { BackCard } from "../revision/BackCard";
import { CardContext } from "../../contexts/cardContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Table = ({ columns, data }: any) => {
  const { t } = useTranslation();
  const [showCardPreview, setShowCardPreview] = useState<any>(null);
  const [showNotes, setShowNotes] = useState<any>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const { storeCard } = useContext(CardContext);
  const navigate = useNavigate();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columns, data }, useSortBy);

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
                  {...column.getHeaderProps(
                    columnIndex === 4 ? column.getSortByToggleProps() : {}
                  )}
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
                    onClick={() => {
                      if (cellIndex === 0) {
                        storeCard(row.original);
                        navigate("/edit");
                      } else if (cellIndex === 5) {
                        setShowNotes(row.original);
                      } else {
                        setShowCardPreview(row.original);
                      }
                    }}
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
      {showNotes && (
        <div
          className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50"
          onClick={(e: any) => {
            if (e.target.id !== "notes") return;
            setShowNotes(null);
          }}
        >
          <div
            id="notes"
            className="flex justify-center items-center w-full h-full"
          >
            <div className="bg-white w-[500px] h-[300px] rounded-3xl shadow-[5px_4px_30.100000381469727px_0px_#00000040] p-8">
              <h1 className="text-2xl font-bold text-bluePrimary mb-4">
                {t("Notes")}
              </h1>
              <p className="text-lg font-semibold text-gray-700">
                {showNotes.note}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
