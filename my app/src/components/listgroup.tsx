import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

export function ListGroup() {
    const a = ["Amin", "Jhon", "Jarvis", "Friday"]
    //a=[]
    // const getmsg = ()=>{
    //     return a.length===0 ?<p>No Data Found</p>: null

    // }
    //writing function outtside of elements because of it's logics
    const handle=(e:MouseEvent)=>{
        console.log(e.currentTarget)
    }


    return (<Fragment><h1>List Group</h1>
        {a.length === 0 && <p>No Items Found At 38:29</p>}
        <ul className="list-group">
            {a.map(name => <li className="list-group-item" onClick={handle} key={name}>{name}</li>)}
        </ul></Fragment>);
}

//export default listgroup
