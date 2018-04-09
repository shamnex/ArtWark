import React, {Component} from "react";
import {ArtCard} from '../components'

const ArtDeck = ({items, onAddItemToCart, filter, onBuyItem, onFilterItems})=>{
    const onFilter = (e) => onFilterItems(e.target.value);
    return(
        <div className="flex-column">
            <div className="flex-box filters">
                <label>
                    <input type="radio" name="category" value="all" onChange={onFilter} checked={filter=="all"?true:false}/>
                    All
                </label>
                <label>
                    <input type="radio" name="category" value="penciled" onChange={onFilter} checked={filter=="penciled"?true:false}/>
                    Penciled
                </label>
                <label>
                    <input type="radio" name="category" value="abstract" onChange={onFilter} checked={filter=="abstract"?true:false}/>
                    Abstract   
                </label>
                <label>
                    <input type="radio" name="category" value="computer" onChange={onFilter} checked={filter=="computer"?true:false}/>
                    Computer
                </label>
                <label>
                    <input type="radio" name="category" value="painting" onChange={onFilter} checked={filter=="painting"?true:false}/>
                    Painting
                </label>
                
            </div>
            <div className="flex-box">
                {
                    items.map((item)=>
                        <ArtCard key={item.id} item={item} onAddToCart={onAddItemToCart} onBuy={onBuyItem} />
                    )
                }
            </div>

        </div>
    )
}

export default ArtDeck;