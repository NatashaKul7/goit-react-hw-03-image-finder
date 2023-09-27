import { SearchbarBox } from "./Searchbar.styled"

export const Searchbar = () => { 
    return (
<SearchbarBox>
  <form>
    <button type="submit">
      <span>Search</span>
    </button>

    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</SearchbarBox>
    )
}


