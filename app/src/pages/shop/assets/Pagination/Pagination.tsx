import { observer, useObserver } from 'mobx-react';
import ReactPaginate from 'react-paginate';
import { stores } from '../../../../stores';
import { useEffect, useState } from 'react';

export const PaginatedItems = observer(({ itemsPerPage }: { itemsPerPage: number }) => {
  const storeItems = useObserver(() => stores.itemsStore)
  const total = storeItems.shownTotalAmount;
  const pageCount = Math.ceil(total / itemsPerPage);
  const [page, setPage] = useState({} as { forcePage: number } | {})

  useEffect(() => total === 0 ? setPage({}) : setPage({ forcePage: 0 }), [storeItems.type])

  const handlePageClick = (event: any) => {
    setPage({ forcePage: event.selected })
    storeItems.fetchPage((event.selected * itemsPerPage) % total)
  };

  return <div>
    <ReactPaginate
          {...page}
          nextLabel="next >"
          onPageChange={handlePageClick}
          renderOnZeroPageCount={null}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="pagination-page-item"
          pageLinkClassName="pagination-page-link"
          previousClassName="pagination-page-item"
          previousLinkClassName="pagination-page-link"
          nextClassName="pagination-page-item"
          nextLinkClassName="pagination-page-link"
          breakLabel="..."
          breakClassName="pagination-page-item"
          breakLinkClassName="pagination-page-link"
          containerClassName="pagination-pagination"
          activeClassName="pagination-active"
      />
  </div> 
})
