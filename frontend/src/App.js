import {createBrowserRouter , RouterProvider} from "react-router-dom"
import './App.css';
import Body from "./Components/Body";
import Conferences from "./Components/Conferences";


const unicom = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "conferences",
        element:<Conferences/>
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={unicom}/>
    </div>
  );
}

export default App;
