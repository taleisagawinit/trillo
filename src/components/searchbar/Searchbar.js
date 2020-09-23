import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi'

export default function Searchbar(props) {
  const [inputValue, setInputValue] = useState("");

  return(
    <form action="#" className="searchbox">
      <input type="text" placeholder="Search hotels" value={inputValue} onChange={e => setInputValue(e.target.value)} className="searchbox__input"></input>
      <button type="submit" className="searchbox__submit-button"><BiSearch/></button>
    </form>
  )
}