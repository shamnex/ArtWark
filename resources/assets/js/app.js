import React, {Component} from "react";
import ReactDOM from "react-dom";
import {NavBar, ArtDeck, SearchBar, MobileSearchBar, Banner} from './components';


class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            cart:{
                count:0,
                items:[

                ]
            },
            items:[],
            filter:"all",
            search:""

        }
        
     
        this.setSearch = this.setSearch.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.filterItems = this.filterItems.bind(this);
        this.setFilter = this.setFilter.bind(this);

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

        this.setState({items})
    }

    setSearch(search){
        this.setState({search})
    }
    
    addToCart(data){
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

    filterItems(items=[], filter="", data=""){
        const filteredItems = items.filter(item=>item.category==filter||filter=="all");
        const searchItems = filteredItems.filter(
            item => 
            item.name.toLowerCase().includes(data.toLowerCase())||
            item.description.toLowerCase().includes(data.toLowerCase())||
            item.category.toLowerCase().includes(data.toLowerCase())||
            item.price.toLowerCase().includes(data.toLowerCase())
        );

        // filteredItems.push(searchItems)
        
        // this.items.map((item)=>{
        //     if(item.category===data||data==="all")
        //         return filteredItems.push(item)
        // }); 
        // console.log(filteredItems)
        // const state = Object.assign({}, ...this.state, {
        //     filteredItems,
        //     filter:data
        // })
        // this.setState(state)
        console.log(searchItems)
        return searchItems;
          
    }

    setFilter(filter){
        this.setState({filter});
    }

    render(){
        return(
            <div>

                <NavBar 
                    cartCount={this.state.cart.count} 
                    onSearch={this.setSearch}
                    onCancelSearch={this.setSearch}
                    search={this.state.search}
                />
                
                <MobileSearchBar 
                    onSubmit={this.setSearch} 
                    onCancelSearch={this.setSearch} 
                    search={this.state.search}
                />
                <Banner />
                <ArtDeck 
                    items={this.filterItems(this.state.items, this.state.filter, this.state.search)} 
                    onAddItemToCart={this.addToCart} 
                    onBuyItem={(item)=>alert(item +"bought")}
                    search={this.state.search}
                    filter={this.state.filter}
                    onSetFilter={this.setFilter}
                />
                
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));