import React, {Component} from "react";
import BookCard from './BookCard'
import PropTypes from 'prop-types'
class SearchResult extends Component {
    render(){
        const { shelf, books, bookChangeHandeler } =this.props
        return(
        <div className="search-books-results">
          <ol className="books-grid">
          {books.map((b,i)=>(
            <li key={i}>
            <BookCard bookShelf={shelf} bookChangeHandeler={bookChangeHandeler} book={b} />
            </li>
          ))}
          </ol>
      </div>)
    }
    static propTypes = {
      bookChangeHandeler: PropTypes.func.isRequired,
      books: PropTypes.array,
      shelf:PropTypes.string,
    };
}
export default SearchResult