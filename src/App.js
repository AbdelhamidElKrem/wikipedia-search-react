import React from "react";


import Search from "./components/search";

class App extends React.Component{
    render(){
        return(
        <div className="ui grid countener center aligned">
            <div className="column eight wide">
                <Search/>
            </div>
        </div>)
    }
}

export default App;