import React from 'react'
import { useRef } from 'react'

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {

    const userefData = useRef(null);
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={query}
                className="SearchInputText"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                ref={userefData}
                type='text'
                onChange={(event) => setQuery(event.target.value)}
                
            />   
            <input
                disabled={isLoading || !query}
                type="submit"
                className="btn"
                value="Search"
            />
        </form>
    )
}

export default SearchBar