import {ListGroup} from "./components/listgroup"

function App(){
  const a = ["Amin", "Jhon", "Jarvis", "Friday"]
  return <div><ListGroup name={a} heading="Names"/></div>
}
export default App