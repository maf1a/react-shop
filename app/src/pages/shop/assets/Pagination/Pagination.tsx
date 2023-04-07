import { useState } from 'react';
import ReactPaginate from 'react-paginate';

// Example items, to simulate fetching from another resources.
const items = [...Array(333).keys()];

export function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return {
    offset: itemOffset,
    Pagination: <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
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
        renderOnZeroPageCount={null}
    />
  }
}
