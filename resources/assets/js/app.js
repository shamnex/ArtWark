import React, {Component} from "react";
import ReactDOM from "react-dom";
import {NavBar, ArtDeck, SearchBar, MobileSearchBar} from './components';


class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            cart:{
                count:0,
                items:[

                ]
            },
            allItems:[],
            filteredItems:[],
            filter:"all"

        }
        
     
        this.onSubmitSearch = this.onSubmitSearch.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.filterItems = this.filterItems.bind(this);
    }

    componentWillMount(){
        const items = [
            {id:1, name:"ArtWark", category:"penciled" ,description:"world class Artwork. designed with class and style", price:"$8000"},
            {id:2, name:"Revert 1",  category:"painting", description:"Computer Artwork. designed with class and style", price:"$4000"},
            {id:3, name:"Penciled 2.0",  category: "penciled",description:"Penciled Artwork. designed with greek and flex", price:"$3000"},    
            {id:6, name:"ArtBook",  category: "computer",description:"world class Artwork. designed with class and style", price:"$8000"},
            {id:4, name:"Penciled 3",  category: "penciled", description:"Penciled Artwork. designed with greek and flex", price:"$3000"},   
            {id:5, name:"Rocketed",  category: "abstract",description:"Computer Artwork. designed with class and style", price:"$4000"},    
        ];

        this.setState({allItems:items, filteredItems:items})
    }

    onSubmitSearch(data){
        
        const searchItems = this.state.allItems.filter(
            item => 
            item.name.toLowerCase().includes(data.toLowerCase())||
            item.description.toLowerCase().includes(data.toLowerCase())||
            item.category.toLowerCase().includes(data.toLowerCase())
        )
        console.log(Array(searchItems ))
        this.setState({allItems:searchItems, filteredItems:searchItems, filter:'all'})
    }
    
    addToCart(data){
        // alert(data)
        const state = Object.assign({}, ...this.state,{
            cart:{  
                count: this.state.cart.count+1,
                items:[
                    ...this.state.cart.items,
                    data    
                ]
            }
            
        })
        this.setState(state)
    }

    filterItems(data){
        const filteredItems = this.state.allItems.filter(item=>item.category==data||data=="all");
        // this.items.map((item)=>{
        //     if(item.category===data||data==="all")
        //         return filteredItems.push(item)
        // }); 
        console.log(filteredItems)
        const state = Object.assign({}, ...this.state, {
            filteredItems,
            filter:data
        })
        this.setState(state)
          
    }

    render(){
        return(
            <div>
                <NavBar cartCount={this.state.cart.count} onSearch={this.onSubmitSearch}/>
                <MobileSearchBar onSubmit={this.onSubmitSearch} />
                <ArtDeck 
                    items={this.state.filteredItems} 
                    filter={this.state.filter} 
                    onFilterItems={this.filterItems} 
                    onAddItemToCart={this.addToCart} 
                    onBuyItem={(data)=>alert(data +"bought")}
                />
                
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));