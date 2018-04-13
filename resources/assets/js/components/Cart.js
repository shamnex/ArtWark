import React, {Component} from 'react';


class Cart extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        document.body.style.overflow = "hidden"
    }
    
    componentWillUnmount(){
        document.body.style.overflow = ""
        
    }

    render(){
        return(
            <div className="cart">
                <div className="panel">
                </div>
            </div>
        )
    }   
}   

export default Cart;