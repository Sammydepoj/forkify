import View from './view.js'
import imageUrl from 'url:../../img/icons.svg';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler){
      this._parentElement.addEventListener('click', function(e){
        const btn = e.target.closest('.btn--inline')
        if (!btn) return;

        const goToPage = +btn.dataset.goto;
      handler(goToPage);
      })
    }
    _generateMarkup() {
        const currentPage = this._data.page;
        const numPages = Math.ceil(this._data.results.lenght / this._data.resultsPerPage);

        // Page 1, and there are other pages
        if (currentPage === 1 && numPages > 1) {
            return ` 
            <button data-goto="${
              curPage + 1
            }" class="btn--inline pagination__btn--next">
            <span>Page ${ currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${imageUrl}#icon-arrow-right"></use>
            </svg>
          </button>
            `;
        }
        //Last Page
        if (currentPage === numPages && numPages > 1) {
            return `
            <button data-goto="${
              curPage - 1
            }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${imageUrl}#icon-arrow-left"></use>
            </svg>
            <span>Page ${ currentPage - 1}</span>
          </button>
            `;
        }
        //Other page
        if (currentPage < numPages) {
            return `
            <button data-goto="${
              curPage - 1
            }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${imageUrl}#icon-arrow-left"></use>
            </svg>
            <span>Page ${ currentPage - 1}</span>
          </button>

          <button data-goto="${
            curPage + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${ currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${imageUrl}#icon-arrow-right"></use>
            </svg>
          </button>
            `
        }

        //Page 1, no other pages
        return '';
    }
}
export default new PaginationView();