import React, { Component } from "react";
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchResult from './SearchResult'
import PropTypes from 'prop-types'
class SearchPage extends Component {
  
  state={booksFound:[],
    searchKeyWord:''}
  onSearch=event=>{
    
    const searchKeyWord = event.target.value
    this.setState(()=>({searchKeyWord}))

    if(searchKeyWord.length >2){
      console.log(searchKeyWord.length)
      BooksAPI.search(searchKeyWord).then((resultBooksFound)=>{
      if(resultBooksFound.length > 0 && !resultBooksFound.error){
        this.props.existingBooks.forEach(element=>{
          resultBooksFound.forEach(item=>{
            if(element.id===item.id)
            {
              item.shelf=element.shelf
            } 
          })
      })
      this.setState(()=>({
        booksFound: resultBooksFound,
      }))
      }else{
        this.setState({booksFound: [],})
      }
    })
    }else{
        this.setState(()=>({
        booksFound: [],
        }
        ))
    }
  }

    render(){
      const{ addBook }=this.props
        return(
          
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'><button className="close-search">Close</button> </Link>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.searchKeyWord}
                  onChange={this.onSearch}/>
              </div>
            </div>
              <SearchResult  bookChangeHandeler={addBook} books={this.state.booksFound}/>
          </div>
        )
    }
    static propTypes={
      addBook: PropTypes.func.isRequired,
      existingBooks: PropTypes.array,
    };
}
export default SearchPage