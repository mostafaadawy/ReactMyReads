import React from 'react'
import './App.css'
import MyShelfsPage from './MyShelfsPage'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
class BooksApp extends React.Component {
  state = {books: [],
}
async componentDidMount(){

 const books = await BooksAPI.getAll()
      this.setState({
        books
      }
      )
}
bookChangeHandeler=(requiredUpdatedBook, requiredShelf)=>{
  BooksAPI.update(requiredUpdatedBook, requiredShelf)
  requiredUpdatedBook.shelf=requiredShelf; 
    const books = this.state.books.filter((bo) => bo.id!==requiredUpdatedBook.id).concat(requiredUpdatedBook); 
    this.setState({ books });

} 
  render() {
    return (
      <div className="app">
        <Route path='/search' render={()=>(
          <SearchPage existingBooks={this.state.books} addBook={this.bookChangeHandeler}/>
          )}/>
        <Route exact path='/' render={()=>(
          <MyShelfsPage books={this.state.books}  bookChangeHandeler={this.bookChangeHandeler}/>)}/>
      </div>
    )
  }
}

export default BooksApp
