import React, {Component} from "react";
import BookCard from './BookCard'
class BookShelf extends Component {
    render(){
        const { shelf, books, bookChangeHandeler } =this.props
        const booksOnShelf = books.filter((book)=>{return book.shelf===shelf})
        return(<div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {booksOnShelf.map((b,i)=>(
            <li key={i}>
            <BookCard bookShelf={shelf} bookChangeHandeler={bookChangeHandeler} book={b} />
            </li>
          ))}
          </ol>
        </div>
      </div>)
    }
}
export default BookShelf