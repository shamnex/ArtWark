import React, {Component} from "react";
import {ArtCard} from '../components'

const ArtDeck = ({items, onAddItemToCart, onBuyItem, search="", filter="all", onSetFilter})=>{
    const onFilter = (e) => onSetFilter(e.target.value);
    const FilterNode =({search})=>{
        if(search!=="")
            return(
                 <div>
                    <div className="flex-box">
                        Search Results : {search}
                    </div>
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
                </div>    
            )
            return null;

        }
    return(
        <div className="flex-column">
            <FilterNode search={search} />            
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