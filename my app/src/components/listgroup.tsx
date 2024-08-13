import { Fragment } from "react/jsx-runtime";

export function ListGroup() {
let a=["Amin","Jhon","Jarvis","Friday"]
a=[]
// const getmsg = ()=>{
//     return a.length===0 ?<p>No Data Found</p>: null

// }


    return (<Fragment><h1>List Group</h1>
    {a.length===0 && <p>No Items Found At 38:29</p>}
        <ul className="list-group">
        {a.map(name => <li key={name}>{name}</li>)}
    </ul></Fragment>);
}

//export default listgroup
 