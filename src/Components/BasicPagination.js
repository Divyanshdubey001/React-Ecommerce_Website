import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ handleChange }) {
  return (
    <div className="page-container">
      <Stack spacing={2}>
        <Pagination count={12} color="secondary" onChange={handleChange} />
      </Stack>
    </div>
  );
}
