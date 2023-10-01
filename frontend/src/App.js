import {createBrowserRouter , RouterProvider} from "react-router-dom"
import './App.css';
import Body from "./Components/Body";
import Conferences from "./Components/Conferences";
import Training from "./Components/Training";


const unicom = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "conferences",
        element: <Conferences />,
      },
      {
        path: "training",
        element: <Training/>
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
