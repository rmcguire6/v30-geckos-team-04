import React, {useState, useContext} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import styles from './SearchBar.module.css'
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
          <input className={styles.searchBar}
           value={searchText}
           placeholder='Search'
           onChange={(e) => setSearchText(e.target.value.trim())}
          />
           <button className={styles.icon}><FontAwesomeIcon icon={faSearch} /></button>
        </form>
    </div>
  );
}

export default SearchBar;
