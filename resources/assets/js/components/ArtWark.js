import React, {Component} from "react";
import ReactDOM from "react-dom";
import {NavBar, ArtDeck, SearchBar, MobileSearchBar, Banner,Cart} from '../components';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


class ArtWark extends Component{
    constructor(props){
        super(props);
        this.state = {
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
        this.quantity = 1;
        this.exist = false;
        let state =null;

        this.state.cart.items.map((item)=>{
            if(item.itemId == data){
                this.exist = true;
                this.quantity = ++item.quantity;
            }
        })
        
        if(!this.exist){
            state = Object.assign({}, ...this.state,{
                cart:{  
                    count: ++this.state.cart.count,
                    items:[
                        ...this.state.cart.items,
                        {
                            itemId:data,
                            quantity: 1
                        }   
                    ]
                }  
            })
        }
        else{
            state = Object.assign({}, ...this.state, {
                cart:{  
                    count: this.state.cart.count+1,
                    items:
                        this.state.cart.items.map(item=>{
                            if(item.itemId == data){
                                return {itemId:data, quantity: this.quantity}
                            }
                            return item
                        })
                        
                }  
            })
        }
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
                
                
                <Banner />

                <MobileSearchBar 
                    onSubmit={this.setSearch} 
                    onCancelSearch={this.setSearch} 
                    search={this.state.search}
                />

                <Switch>
                    <Route exact path="/" render={()=>
                        <ArtDeck 
                        items={this.filterItems(this.state.items, this.state.filter, this.state.search)} 
                        onAddItemToCart={this.addToCart} 
                        onBuyItem={(item)=>alert(item +"bought")}
                        search={this.state.search}
                        filter={this.state.filter}
                        onSetFilter={this.setFilter}
                        />                
                    }/>
                    <Route path="/:filter(penciled|abstract|computer|painting)" render={(path)=>{
                        const filter = path.match.params.filter;
                        console.log(filter)

                        return(
                            <ArtDeck 
                            items={this.filterItems(this.state.items, filter, this.state.search)} 
                            onAddItemToCart={this.addToCart} 
                            onBuyItem={(item)=>alert(item +"bought")}
                            search={this.state.search}
                            filter={filter}
                            onSetFilter={this.setFilter}
                            />                
                        )
                        }
                    }/>
                    <Route path="/cart" component={Cart} />
                </Switch>
            </div>
        )
    }

}

export default ArtWark