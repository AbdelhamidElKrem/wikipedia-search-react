import React,{useState,useEffect} from "react";
import axios from "axios";
import List from "./List";

const Search = () =>{
    const [valuue,Setvaluue] = useState("");
    const [results , SetReselts] = useState([]);
    useEffect(()=>{
        let timerId = null; 
        if(valuue){
         
            timerId = setTimeout(async () => {
                const { data } = await axios.get("https://en.wikipedia.org/w/api.php",{
                params:{
                    action:"query",
                    list:"search",
                    origin:"*",
                    format:"json",
                    srsearch: valuue
                }
            });
            SetReselts(data.query.search);  
        }, 1000);
            
        }
        return () => {
            clearTimeout(timerId);
        }
    },[valuue])
    return (
    <React.Fragment>
    <form className ="ui form">
        <input 
        type="text"
        placeholder =" search wikipedia ..."
        value = {valuue}
        onChange = {(e)=> Setvaluue(e.target.value)}
        />
    </form>
    <List results = {results}/>
    </React.Fragment>
    )
}
export default Search;