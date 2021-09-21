import React, {Component} from "react";
import SelectStatus from './SelectStatus'
class BookCard extends Component {    
//that calles main change shelf function sending to it the required book and required shelf
//called from child and refrence parent function
handleChange=event=> {
  const newShelf = event.target.value;
    this.props.bookChangeHandeler(this.props.book,newShelf)
}
render(){
    let backgroundImage = " "
    let authors='Not Mensioned'
    try {
      backgroundImage = "url("+this.props.book.imageLinks.smallThumbnail+")"
      authors=JSON.stringify( this.props.book.authors).slice(1,-1)
    } catch (error) {
      
    } 
    return(<div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: backgroundImage }}></div>
      <SelectStatus shelf={this.props.book.shelf} handleChange={this.handleChange}/>
    </div>
    <div className="book-title"> {this.props.book.title}</div>
    <div className="book-authors">{authors}</div>
  </div>)
}
}
export default BookCard
