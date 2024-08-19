import {ListGroup} from "./components/listgroup"


function App(){
  const a = ["Amin", "Jhon", "Jarvis", "Friday"]
  const c=(a:string)=>{
    console.log(a)
  }
  return <div><ListGroup name={a} heading="Names" onSelectItem={c} /></div>
}
export default App