import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoulettePage from "./pages/RoulettePage/RoulettePage";
import SlotsPage from "./pages/SlotsPage/SlotsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoulettePage />,
  },
  {
    path: "/slots",
    element: <SlotsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
