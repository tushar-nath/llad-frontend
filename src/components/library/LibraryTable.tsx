import { useTable } from "react-table";
import { EditIcon } from "../../svgs/editIcon";
import { Table } from "./Table";
import { FilterIcon } from "../../svgs/filterIcon";
import moment from "moment";

export const LibraryTable = ({ cards }: { cards: any[] }) => {
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
      Header: (row: any) => {
        return (
          <div className="flex flex-row gap-1.5 items-center">
            <FilterIcon />
            <h1 className="text-base font-bold text-gray-900">Norwegian</h1>
          </div>
        );
      },
      accessor: "norwegianWord",
    },
    {
      Header: (row: any) => {
        return (
          <div className="flex flex-row gap-1.5 items-center">
            <FilterIcon />
            <h1 className="text-base font-bold text-gray-900">English</h1>
          </div>
        );
      },
      accessor: "englishWord",
    },
    {
      Header: (row: any) => {
        return (
          <div className="flex flex-row gap-1.5 items-center">
            <FilterIcon />
            <h1 className="text-base font-bold text-gray-900">Tags</h1>
          </div>
        );
      },
      accessor: "tags",
    },
    {
      Header: (row: any) => {
        return (
          <div className="flex flex-row gap-1.5 items-center">
            <FilterIcon />
            <h1 className="text-base font-bold text-gray-900">Date Modified</h1>
          </div>
        );
      },
      accessor: "dateModified",
    },
  ];

  const data: any[] = cards.map((card) => {
    return {
      edit: "",
      norwegianWord: card.back.text,
      norwegianExample: card.back.example,
      englishWord: card.front.text,
      englishExample: card.front.example,
      tags: card.tags.join(", "),
      dateModified: moment(card.updatedAt).format("DD/MM/YYYY"),
    };
  });

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};
