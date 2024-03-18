import React from "react";
import { CommonInputsTableData } from "../types/common.types";

type InputsTableProps = {
  columnHeaders: [string, string];
  rows?: CommonInputsTableData;
  setRows: (newParams: CommonInputsTableData) => void;
};

const InputsTable: React.FC<InputsTableProps> = ({
  columnHeaders,
  rows = [],
  setRows,
}) => {
  const handleRowChange = (
    index: number,
    column: "key" | "value",
    value: string,
  ) => {
    const newRows = [...rows];
    newRows[index][column] = value;
    setRows(newRows);
  };

  const addRow = () => {
    setRows([...rows, { key: "", value: "" }]);
  };

  const deleteRow = (index: number) => {
    const newRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(newRows);
  };

  return (
    <div className="bg-gray-500 p-4 h-96 overflow-auto">
      <table className="table-auto w-full">
        <thead className="text-yellow-400">
          <tr>
            {columnHeaders.map((header) => (
              <th key={header} className="px-5 py-2 text-left">
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
            <th className="px-5 py-2 text-left w-8" />
          </tr>
        </thead>
        <tbody className="bg-gray-700">
          {rows.map((row, index) => (
            <tr key={index} className="border-t border-yellow-400">
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={row.key}
                  onChange={(e) =>
                    handleRowChange(index, "key", e.target.value)
                  }
                  className="bg-gray-500 text-white placeholder-yellow-400 border border-yellow-400 p-2 rounded w-full"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={row.value}
                  onChange={(e) =>
                    handleRowChange(index, "value", e.target.value)
                  }
                  className="bg-gray-500 text-white placeholder-yellow-400 border border-yellow-400 p-2 rounded w-full"
                />
              </td>
              <td className="px-4 py-2 text-right">
                <button
                  onClick={() => deleteRow(index)}
                  className=" text-white font-bold py-2 px-5 rounded hover:text-yellow-400"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addRow}
        className="mt-4 bg-yellow-400 text-dark-700 px-6 py-2 rounded shadow"
      >
        Add Row
      </button>
    </div>
  );
};

export default InputsTable;
