"use client";

import { InputAdornment, TextField } from "@mui/material";
import { FiSearch } from "react-icons/fi";

export default function InputField() {
  return (
    <div style={{ maxWidth: "400px" }}>
      <TextField
        id="search"
        type="text"
        variant="outlined"
        placeholder="Search..."
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <FiSearch />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}