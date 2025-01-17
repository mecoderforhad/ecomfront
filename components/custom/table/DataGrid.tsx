"use client";

import React, { useState } from "react";
import { Checkbox, Table, Pagination, Card } from "flowbite-react";

interface DataGridProps {
  headers: string[];
  data: Array<{ [key: string]: string | number }>;
  itemsPerPage: number;
}

const DataGrid: React.FC<DataGridProps> = ({ headers, data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Card>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            {headers.map((header, index) => (
              <Table.HeadCell key={index}>{header}</Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            {currentData.map((row, rowIndex) => (
              <Table.Row
                key={rowIndex}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                {headers.map((header, colIndex) => (
                  <Table.Cell
                    key={colIndex}
                    className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                  >
                    {row[header]}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </Card>
  );
};

export default DataGrid;