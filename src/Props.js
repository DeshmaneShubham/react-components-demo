import { Component } from "react";

export default class Props extends Component{
    render(){
        return(
            <div>
                <h1>#####By using Class componant##########</h1>
                <h2>Name:{this.props.nav}</h2>
                <h2>Age:{this.props.vay}</h2>
            </div>
        )
    }
}
