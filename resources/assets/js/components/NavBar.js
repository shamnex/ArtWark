import React, { Component } from 'react';
import {SearchBar} from '../components';

const NavBar =({cartCount=0, onSearch, onCancelSearch, search=""})=>{
        return(
            <nav>
                <div className="mobile-nav">
                    <div className="menu"><img src="../images/menu.png" alt=""/></div>
                    <ul>
                        <li><a href="/Penciled">Penciled Designs</a></li>
                        <li><a href="/Paintings">Paintings</a></li>
                        <li><a href="/Abstracts">Abstract Design</a></li>
                        <li><a href="/Computer">Computer Art</a></li>
                    </ul>
                </div>
                <div> 
                    <a href="/">
                        <img src="../images/logo.png" alt="Logo"/>
                    </a>  
                </div>
                <ul>
                    <li><a href="/Penciled">Penciled Designs</a></li>
                    <li><a href="/Paintings">Paintings</a></li>
                    <li><a href="/Abstracts">Abstract Design</a></li>
                    <li><a href="/Computer">Computer Art</a></li>
                </ul>
                <span>
                    <SearchBar onSubmit={onSearch} onCancel={onCancelSearch} search={search}/>
                    <div className="cart-count">
                        <a href="/cart">
                            <img src="../images/cart.png" alt="" />
                            <span>{cartCount}</span>
                        </a>   
                    </div>
                </span>
                

            </nav>              
        )
}

export default NavBar;
//  NavBar