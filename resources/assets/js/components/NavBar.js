import React, { Component } from 'react';
import {SearchBar} from '../components';
import {Link} from 'react-router-dom';

const NavBar =({cartCount=0, onSearch, onCancelSearch, search=""})=>{
        return(
            <nav>
                <div className="mobile-nav">
                    <div className="menu"><img src="../images/menu.png" alt=""/></div>
                    <ul>
                        <li><Link to="/">All</Link></li>
                        <li><Link to="/penciled">Penciled Designs</Link></li>
                        <li><Link to="/painting">Paintings</Link></li>
                        <li><Link to="/abstract">Abstract Design</Link></li>
                        <li><Link to="/computer">Computer Art</Link></li>
                    </ul>
                </div>
                <div> 
                    <Link to="/">
                        <img src="../images/logo.png" alt="Logo"/>
                    </Link>  
                </div>
                <ul>
                    <li><Link to="/">All</Link></li>
                    <li><Link to="/penciled">Penciled Designs</Link></li>
                    <li><Link to="/painting">Paintings</Link></li>
                    <li><Link to="/abstract">Abstract Design</Link></li>
                    <li><Link to="/computer">Computer Art</Link></li>
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