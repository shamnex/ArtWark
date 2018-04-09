import React, {Component} from 'react';

const SearchBar =({onSubmit})=>{
    const input = React.createRef()
    const search =(e)=>{
        e.preventDefault();
        const data = input.current.value;
        input.current.value =null;
        onSubmit(data)
    }
    return(
        <form onSubmit={search}>
            <div className="search-bar">
                <input type="search" ref={input} placeholder="Search..."/>
                <button type="submit" >
                    <img src="../images/search.png" alt="Search"/>
                </button>
            </div>
        </form>
    )
}

export default SearchBar;