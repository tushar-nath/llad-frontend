import { useTable } from "react-table";
import { EditIcon } from "../../svgs/editIcon";

export const LibraryTable = () => {
  const columns = [
    {
      Header: "",
      accessor: "edit",
      Cell: (row: any) => {
        return (
          <button>
            <EditIcon />
          </button>
        );
      },
    },
    {
      Header: "Norwegian",
      accessor: "norwegianWord",
    },
    {
      Header: "English",
      accessor: "englishWord",
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Date Modified",
      accessor: "dateModified",
    },
  ];

  const data: any[] = [
    {
      category: "Noun",
      englishWord: "Apple",
      norwegianWord: "Eple",
      dateModified: "12/12/2021",
      edit: "Edit",
    },
    {
      category: "Noun",
      englishWord: "Banana",
      norwegianWord: "Banana",
      dateModified: "12/12/2021",
      edit: "Edit",
    },
    {
      category: "Noun",
      englishWord: "Cat",
      norwegianWord: "Katt",
      dateModified: "12/12/2021",
      edit: "Edit",
    },
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columns, data });

  return (
    <div>
      <table
        {...getTableProps()}
        className="w-full table shadow-[1px_4px_22.299999237060547px_0px_#00000040] rounded-3xl bg-white
"
      >
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={`header-group-${index}`}
            >
              {headerGroup.headers.map((column, columnIndex) => (
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
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={`row-${rowIndex}`}
                className="h-20 hover:bg-gray-50 transition-colors duration-300"
              >
                {row.cells.map((cell, cellIndex) => (
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
                    } ${cellIndex === 0 ? "text-sm truncate w-2/6" : ""}`}
                    // onClick={() => handleShowAnalytics(row.original._id)}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
