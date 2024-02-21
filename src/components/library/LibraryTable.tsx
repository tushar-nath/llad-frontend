import { EditIcon } from "../../svgs/editIcon";
import { Table } from "./Table";
import { FilterIcon } from "../../svgs/filterIcon";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { TrashIcon } from "../../svgs/trashIcon";

export const LibraryTable = ({
  cards,
  tags,
  handleFilterByTag,
  handleUpdateStarred,
  handleDeleteCard,
}: {
  cards: any[];
  tags: string[];
  handleFilterByTag: (tag: string) => void;
  handleUpdateStarred: any;
  handleDeleteCard: any;
}) => {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
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
            <h1 className="text-base font-bold text-gray-900">
              {t("Norwegian")}
            </h1>
          </div>
        );
      },
      accessor: "norwegianWord",
    },
    {
      Header: (row: any) => {
        return (
          <div className="flex flex-row gap-1.5 items-center">
            <h1 className="text-base font-bold text-gray-900">
              {t("English")}
            </h1>
          </div>
        );
      },
      accessor: "englishWord",
    },
    {
      Header: (row: any) => {
        return (
          <div
            className="flex flex-row gap-1.5 items-center cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FilterIcon />
            <h1 className="text-base font-bold text-gray-900">{t("Tags")}</h1>
            {showDropdown && (
              <div className="absolute top-10 left-4 bg-white shadow-md rounded-md">
                <div className="flex flex-col gap-2 p-2 h-28 overflow-y-auto">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => handleFilterByTag(tag)}
                      className="text-gray-900 text-base font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      },
      accessor: "tags",
      Cell: (row: any) => {
        return (
          <div className="flex flex-row gap-1.5 items-center">
            {row.value.map((tag: string, index: number) => (
              <button
                key={index}
                className="text-gray-900 text-base font-semibold bg-gray-100 px-1.5 py-1.5 rounded"
              >
                {tag}
              </button>
            ))}
          </div>
        );
      },
    },
    {
      Header: (row: any) => {
        return (
          <div className="flex flex-row gap-1.5 items-center">
            <FilterIcon />
            <h1 className="text-base font-bold text-gray-900">
              {t("Date Modified")}
            </h1>
          </div>
        );
      },
      accessor: "dateModified",
    },
    {
      Header: (row: any) => {
        return (
          <div className="flex flex-row gap-1.5 items-center">
            <h1 className="text-base font-bold text-gray-900">{t("Notes")}</h1>
          </div>
        );
      },
      Cell: (row: any) => {
        return (
          <button className="text-bluePrimary font-bold">
            {t("View Notes")}
          </button>
        );
      },
      accessor: "note",
    },
    {
      Header: "",
      accessor: "_id",
      Cell: (row: any) => {
        return (
          <button onClick={() => handleDeleteCard(row.value)}>
            <TrashIcon />
          </button>
        );
      },
    },
  ];

  const data: any[] = cards.map((card) => {
    return {
      _id: card._id,
      edit: "",
      norwegianWord: card.back.text,
      norwegianExample: card.back.example,
      englishWord: card.front.text,
      englishExample: card.front.example,
      tags: card.tags,
      dateModified: moment(card.updatedAt).format("DD/MM/YYYY"),
      note: card.note,
      isStarred: card.isStarred,
    };
  });

  return (
    <div>
      <Table
        columns={columns}
        data={data}
        handleUpdateStarred={handleUpdateStarred}
      />
    </div>
  );
};
