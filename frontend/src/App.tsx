import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoulettePage from "./pages/RoulettePage/RoulettePage";
import SlotsPage from "./pages/SlotsPage/SlotsPage";

import { useEffect } from "react";

import { useSelector, useDispatch, Provider } from "react-redux";
import store, { RootState } from "./store";
import { closeWSC } from "./store/wsSlice";

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

const App = () => {
  const wsc = useSelector((state: RootState) => state.ws.wsc);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(closeWSC());
    };
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
