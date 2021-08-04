import React from 'react';
import '../index.css';
import { useTable, useSortBy } from "react-table";

export default function Table({columns, data}: any) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
  
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border border-gray-200 sm:rounded-lg">
    <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap">{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div></div></div></div>
  );
}