import { observer, useObserver } from 'mobx-react';
import ReactPaginate from 'react-paginate';
import { stores } from '../../../../stores';
import { useNavigate, useParams } from 'react-router';

export const PaginatedItems = observer(({ itemsPerPage }: { itemsPerPage: number }) => {
  const storeItems = useObserver(() => stores.itemsStore)
  const total = storeItems.shownTotalAmount;
  const pageCount = Math.ceil(total / itemsPerPage);
  const navigate = useNavigate();
  let { pageType, pageNumber } = useParams();

  let pageNumberInt = parseInt(pageNumber as string) - 1 || 0
  const handlePageClick = (event: any) => {
    storeItems.fetchPage((event.selected * itemsPerPage) % total)
    navigate(`/shop/${pageType}/${event.selected + 1}`)
  };

  return <div>
    <ReactPaginate
          forcePage={pageNumberInt}
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
