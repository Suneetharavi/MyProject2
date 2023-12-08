import React from 'react'


const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={query}
                className="SearchInputText"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                
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