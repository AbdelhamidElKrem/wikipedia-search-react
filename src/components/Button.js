import React from "react";

function SayHello(){
    console.log("Hello!");
}

class Button extends React.Component{
    render(){
        return <button onClick={SayHello}>{this.props.pr}</button>;
    }
} 

export default Button;