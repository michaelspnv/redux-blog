import React from "react"
import { InputField } from "../InputField"
import SearchIcon from "../../../public/svg/search-icon.svg"
import styles from "./Search-field.module.css"

function SearchField() {
  return (
    <div className={styles.searchField}>
      <img
        src={SearchIcon}
        color="red"
        alt="search"
        width="18"
        className={styles.searchIcon}
      />
      <InputField
        id="search"
        placeholder="Search..."
        className={styles.searchInput}
      />
    </div>
  )
}

export { SearchField }
