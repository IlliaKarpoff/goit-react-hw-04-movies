import { useState } from 'react';

export default function useTotalPage() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  return { page, totalPage, setPage, setTotalPage };
}
