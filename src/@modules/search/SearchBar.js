import React, {useState, useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import CurrentLocationContext from '../../context/CurrentLocation'
const SearchBar = () => {
  const [searchText, setSearchText] = useState('')
  const {setCurrentLocation} = useContext(CurrentLocationContext)
  const setLocation = (e) => {
    e.preventDefault()
    setCurrentLocation({location: searchText})
    console.log('current location',searchText)
    setSearchText('')
  }
return (
    <div>
        <form onSubmit={setLocation}>
          <input
           value={searchText}
           onChange={(e) => setSearchText(e.target.value.trim())}
          />
           <button><FontAwesomeIcon icon={faSearch} /></button>
        </form>
    </div>
  );
}

export default SearchBar;
