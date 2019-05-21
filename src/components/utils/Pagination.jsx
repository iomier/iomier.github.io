import React from "react"
import _ from "lodash"
const Pagination = ({ pageSize, totalItems, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(totalItems / pageSize)
  if (pagesCount === 1) return null
  const pages = _.range(1, pagesCount + 1)
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button onClick={() => onPageChange(page)} className="page-link">
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
