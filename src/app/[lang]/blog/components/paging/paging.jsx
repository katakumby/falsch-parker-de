import React, { useCallback } from 'react';
import { ArrowRight } from '@/components/icons/arrowRight';
import { PagingButton } from './pagingButton';
import { ArrowLeft } from '@/components/icons/arrowLeft';
import { v4 } from 'uuid';
import cl from 'classnames';
import Link from 'next/link';
import { buildBlogPagingHref } from '@/utils/utils';

const Paging = ({ page, lastPage, tag }) => {
  function generatePages() {
    let startPage = Math.max(1, page - 1);
    let endPage = Math.min(lastPage, startPage + 2);

    if (lastPage <= 4) {
      startPage = 1;
      endPage = lastPage;
    } else if (page <= 2) {
      endPage = Math.min(4, lastPage);
    } else if (page >= lastPage - 1) {
      startPage = Math.max(1, lastPage - 3);
    } else if (page === 3) {
      startPage = 1;
    } else if (page === lastPage - 2) {
      endPage = lastPage;
    }

    const pagesArray = [];

    if (startPage > 1) {
      pagesArray.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pagesArray.push(`${i}`);
    }

    if (endPage < lastPage) {
      pagesArray.push('...');
    }

    return pagesArray;
  }

  const renderPageNumber = useCallback(
    (pageNumber) => {
      const isActive = pageNumber === page.toString();
      const notPage = pageNumber === '...';

      return (
        <Link
          href={buildBlogPagingHref(pageNumber, tag)}
          className={cl(
            'select-none',
            notPage ? 'pointer-events-none' : '',
            isActive ? 'text-lg opacity-100' : 'opacity-50'
          )}
          key={v4()}>
          {pageNumber}
        </Link>
      );
    },
    [page]
  );

  return (
    <section className='flex justify-center'>
      <div className='flex items-center justify-between gap-6'>
        <PagingButton
          href={buildBlogPagingHref(+page - 1, tag)}
          icon={ArrowLeft}
          direction='left'
          disabled={+page === 1}
        />
        <div className='flex items-center gap-2'>
          {generatePages().map((el) => renderPageNumber(el))}
        </div>
        <PagingButton
          href={buildBlogPagingHref(+page + 1, tag)}
          icon={ArrowRight}
          direction='right'
          disabled={+page === lastPage}
        />
      </div>
    </section>
  );
};

export { Paging };
