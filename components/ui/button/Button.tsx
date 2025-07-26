"use client";

import React from "react";
import { Button, Stack } from "@mui/material";

export function CustomButton() {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">Blue</Button>
      <Button variant="contained" color="inherit">Gray</Button>
      <Button variant="contained" sx={{ backgroundColor: '#1f2937', color: '#fff' }}>
        Dark
      </Button>
      <Button variant="contained" color="info">Light</Button>
      <Button variant="contained" color="success">Success</Button>
      <Button variant="contained" color="error">Failure</Button>
      <Button variant="contained" color="warning">Warning</Button>
      <Button variant="contained" sx={{ backgroundColor: '#8b5cf6', color: '#fff' }}>
        Purple
      </Button>
    </Stack>
  );
}