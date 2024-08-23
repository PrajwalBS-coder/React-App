import {ListGroup} from "./components/listgroup"
import{Alert} from "./components/Alert"
import{Button} from "./components/Button"


function App(){
  const a = ["Amin", "Jhon", "Jarvis", "Friday"]
  const c=(a:string)=>{
    console.log(a)
  }
  return <div><ListGroup name={a} heading="Names" onSelectItem={c} />
  <Alert>
    Hello Namste<marquee>Welcome to India</marquee>
    </Alert>

    <Button onClick={()=>{console.log('Clicked')}}>My Button</Button>
  </div>
  
}
export default App