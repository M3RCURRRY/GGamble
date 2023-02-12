import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouletteRoute from "./routes/RouletteRoute/RouletteRoute";
import RouteWrapper from "./routes/RouteWrapper/RouteWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouletteRoute />
  },
  {
    path: "/1",
    element: <div>Casino Route</div>
  }
]);

function App() {
  return (
    <RouteWrapper>
      <RouterProvider router={router} />
    </RouteWrapper>
  );
}

export default App;
