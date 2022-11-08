import React from 'react';
import { getPagesArray } from '../../../utils/pages';
import MyButton from '../button/MyButton';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className="page__wrapper">
            {pagesArray.map((btn, i) => (
               <MyButton
                  className={`page__btn ${
                     page === i + 1 ? "page__current" : ""
                  }`}
                  onClick={() => changePage(btn)}
                  key={btn}
               >
                  {btn}
               </MyButton>
            ))}
         </div>
    );
};

export default Pagination;