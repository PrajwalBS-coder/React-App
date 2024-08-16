import { Fragment } from "react/jsx-runtime";
import {useState } from "react";
interface Props{
    name:string[];
    heading:string;

}

export function ListGroup({name,heading}:Props) {
    
    const [selectedind,setselectedind]=useState(-1)
    //a=[]
    // const getmsg = ()=>{
    //     return a.length===0 ?<p>No Data Found</p>: null

    // }
    //writing function outtside of elements because of it's logics
    // const handle=(e:MouseEvent)=>{
    //     console.log(e.currentTarget)
    // }


    return (<Fragment><h1>{heading}</h1>
        {name.length === 0 && <p>No Items Found At 38:29</p>}
        <ul className="list-group">
            {name.map((name,index) => <li className={selectedind==index ? "list-group-item active":"list-group-item"} key={name} onClick={() =>{setselectedind(index);} }>{name}</li>)}
        </ul></Fragment>);
}

//export default listgroup
