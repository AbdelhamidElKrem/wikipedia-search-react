import React from "react";

const List =({results}) =>{
    const rendredList = results.map((item) => {
        return (
            <div key ={item.pageid} className = "ui segment">
                <h2>
                    <a href ={"https://en.wikipedia.org?curid=" + item.pageid}
                    className="header"
                    target="_blanc"
                    rel="noreferrer">{item.title}</a>
                </h2>
                <p dangerouslySetInnerHTML={{__html: item.snippet}}></p>
            </div>
        );
    });


    return rendredList;
   
};

export default List;