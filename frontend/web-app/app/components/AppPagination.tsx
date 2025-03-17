"use client";

import { Pagination } from "@mui/material";

type Props = {
    currentPage: number;
    pageCount: number;
    pageChanged: (page: number) => void;
}

export default function AppPagination({ currentPage, pageCount, pageChanged }: Props) {
  return (
    <Pagination
      color="primary"
      size="large"
      count={pageCount}
      page={currentPage}
      onChange={(_, page) => pageChanged(page)}
    />
  );
}