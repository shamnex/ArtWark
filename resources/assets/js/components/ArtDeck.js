import React, {Component} from "react";
import {ArtCard} from '../components'
import { Link } from "react-router-dom";

const ArtDeck = ({items, onAddItemToCart, onBuyItem, search="", filter="all", onSetFilter})=>{
    const onFilter = (e) => onSetFilter(e.target.value);
    const FilterNode =({search, filter})=>{
            if(search!=="" )
            return(
                 <div>
                    <div className="flex-box">
                        Search Results : {search} in <Link to={filter}>&nbsp;{filter} </Link>
                    </div>
                    
                    <div className="flex-box filters">
                        <label>
                            <Link to="/">
                                <input type="radio" name="category" value="all" checked={filter=="all"?true:false}/>
                            </Link>
                            All
                        </label>
                        <label>
                            <Link to="penciled">
                                <input type="radio" name="category" value="penciled" checked={filter=="penciled"?true:false}/>
                            </Link>

                            Penciled
                        </label>
                        <label>
                            <Link to="abstract">
                                <input type="radio" name="category" value="abstract" checked={filter=="abstract"?true:false}/>
                            </Link>
                            Abstract   
                        </label>
                        <label>
                            <Link to="computer">
                                <input type="radio" name="category" value="computer"  checked={filter=="computer"?true:false}/>
                            </Link>
                            Computer
                        </label>
                        <label>
                            <Link to="painting">
                                <input type="radio" name="category" value="painting"  checked={filter=="painting"?true:false}/>
                            </Link>
                            Painting
                        </label>
                        
                    </div>
                </div>    
            )
            return null;

        }
    return(
        <div className="flex-column">
            <FilterNode search={search} filter={filter} />            
            <div className="flex-box">
                {
                    items.map((item)=>
                        <ArtCard key={"key"+item.id} item={item} onAddToCart={onAddItemToCart} onBuy={onBuyItem} />
                    )
                }
            </div>
        </div>
    )
}

export default ArtDeck;