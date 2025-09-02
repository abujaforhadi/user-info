'use client';

import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  if (!totalPages || totalPages <= 1) return null;

  const windowSize = 2;
  const pages: (number | 'ellipsis-left' | 'ellipsis-right')[] = [];

  const add = (p: number) => {
    if (p >= 1 && p <= totalPages) pages.push(p);
  };

  add(1);
  const start = Math.max(2, currentPage - windowSize);
  const end = Math.min(totalPages - 1, currentPage + windowSize);

  if (start > 2) pages.push('ellipsis-left');
  for (let p = start; p <= end; p++) add(p);
  if (end < totalPages - 1) pages.push('ellipsis-right');

  if (totalPages > 1) add(totalPages);

  return (
    <UIPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={currentPage === 1}
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {pages.map((p, i) => {
          if (p === 'ellipsis-left' || p === 'ellipsis-right') {
            return (
              <PaginationItem key={`${p}-${i}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          const page = p as number;
          const isActive = page === currentPage;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={isActive}
                onClick={(e) => {
                  e.preventDefault();
                  if (!isActive) onPageChange(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={currentPage === totalPages}
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  );
}
