import React from "react";

const Search = ({searchQuery, setSearchQuery}) => {
    return (
        <div className="row container m-3">
            <h1 className="text-center">Car Connekt</h1>
            <input
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                placeholder="search here..."
                type="text"
                id="header-search"
                name='s'
                className="col-4 offset-4">
            </input>
        </div>
    );
}
export default Search;