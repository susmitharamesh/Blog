import React from "react";
const Content=()=>
{
    const body=[
        {
            title:"Opening party!",
            author:"Susmitha"
        },
        {
            title:"Welcome to the New Blog",
            author:"Priya"
        }
    ]
    return(
        <div className="content">
            <div className="c1"><h2>{body[0].title}</h2>
            <p>Written By{body[0].author} </p></div>
            <div className="c2">
            <h2>{body[1].title}</h2>
            <p>Written By{body[1].author}</p>
            </div>
            
        </div>
    )
}
export default Content