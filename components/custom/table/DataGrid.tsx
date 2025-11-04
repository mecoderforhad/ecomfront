"use client";

import React, { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import {
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Pagination,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import InputField from "@/components/ui/input/InputField"; // Assuming it's MUI compatible

interface DataGridProps {
  headers: string[];
  data: Array<{ [key: string]: string | number }>;
  itemsPerPage: number;
}

const DataGrid: React.FC<DataGridProps> = ({ headers, data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(
    debounce((term: string, uniqueName: string) => {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set(uniqueName, term);
      } else {
        params.delete(uniqueName);
      }
      replace(`${pathname}?${params.toString()}`);
    }, 300),
    [searchParams, pathname, replace]
  );

  // const handleEntriesChange = (e: ChangeEvent<{ value: unknown }>) => {
  //   debounceSearch(e.target.value as string, "entries");
  // };

  return (
    <Card variant="outlined">
      <CardContent>
        <div className="flex items-center justify-between gap-5 mb-4">
          <FormControl size="small" sx={{ minWidth: 100 }}>
            <InputLabel id="entries-label">Entries</InputLabel>
            <Select
              labelId="entries-label"
              defaultValue={searchParams.get("entries")?.toString() || "10"}
              // onChange={handleEntriesChange}
              label="Entries"
            >
              {[10, 20, 30, 40].map((val) => (
                <MenuItem key={val} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <InputField
            // Uncomment and connect if InputField supports MUI input
            // onChange={handleSearchChange}
            // defaultValue={searchParams.get("query")?.toString()}
            // placeholder="Search..."
          />
        </div>

        <div className="overflow-x-auto">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                {headers.map((header, index) => (
                  <TableCell key={index}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {currentData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  {headers.map((header, colIndex) => (
                    <TableCell key={colIndex}>
                      {row[header]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-end mt-4">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            color="primary"
            shape="rounded"
            showFirstButton
            showLastButton
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DataGrid;