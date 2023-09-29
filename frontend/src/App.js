import {createBrowserRouter , RouterProvider} from "react-router-dom"
import './App.css';
import Body from "./Components/Body";


const unicom=createBrowserRouter([
  {
    path:"/",
    element:<Body/>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={unicom}/>
    </div>
  );
}

export default App;
