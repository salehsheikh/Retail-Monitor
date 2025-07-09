"use client";

import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const DataTable = ({ columns, data, highlightHeader = false }) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  const headerClass = highlightHeader
    ? "bg-[#B1ED00]/50 text-white font-medium text-sm h-17 px-10 rounded-[10px]!"
    : "text-white font-semibold text-sm h-17 px-10";

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[940px] rounded-[10px]! border border-white/50 bg-[#0D0D0D]">
        <table className="w-full text-left border-collapse">
          {/* Table Head */}
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className={headerClass}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="p-4">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* Table Body */}
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t border-white/50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-4 text-white/50 text-xs">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
