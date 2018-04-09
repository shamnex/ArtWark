import React, {Component} from 'react';
import {SearchBar} from '../components'

const MobileSearchBar = ({onSubmit})=>{
    return(
        <div className="mobile">
            <SearchBar onSubmit={onSubmit}/>
        </div>
    )
}

export default MobileSearchBar