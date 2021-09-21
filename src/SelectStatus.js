import React, { Component } from "react";
class SelectStatus extends Component {
render(){
  const { shelf, handleChange } =this.props
    return( 
    <div className="book-shelf-changer">
    <select value={shelf} onChange={handleChange}>
      <option value="move" disabled>  Move to...</option>
      <option value="none">{shelf === "none"? "✓  None": "-  None"}</option>
      <option value="currentlyReading">{shelf === "currentlyReading"? "✓  Currently Reading": "-  Currently Reading"} </option>
      <option value="wantToRead">{shelf === "wantToRead"? "✓  Want to Read": "-  Want to Read"}</option>
      <option value="read">{shelf === "read"? "✓  Finished Read": "-   Finished Read"} </option>
      
    </select>
  </div>
  )
}
}
export default SelectStatus