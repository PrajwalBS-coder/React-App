import { Fragment } from "react/jsx-runtime";

export function ListGroup() {
const a=["Amin","Jhon","Jarvis","Friday"]


    return (<Fragment><h1>List Group</h1>
        <ul className="list-group">
        {a.map(name => <li>{name}</li>)}
    </ul></Fragment>);
}

//export default listgroup
