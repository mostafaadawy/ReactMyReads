import React, {Component} from 'react'
import BookShelf from './BookShelf'
import ShelfsTitle from './ShelfsTitle'
import SearchButton from './SearchButton'

class MyShelfsPage extends Component {
    
    render(){
        const shelfs= 
        [
          {shelf:'currentlyReading'},
          {shelf:'wantToRead'},
          {shelf:'read'},
        ]
        const { bookChangeHandeler, books } =this.props
        return(   
        <div className="list-books">
            <ShelfsTitle/>
            {shelfs.map((s,i)=>(<div key={i} className="list-books-content">
                <BookShelf  bookChangeHandeler={bookChangeHandeler} shelf={s.shelf} books={books}/>
            </div>))}
            
            <SearchButton/>
      </div>)
    }
}
export default MyShelfsPage