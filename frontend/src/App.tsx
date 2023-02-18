import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageWrapper from "./pages/PageWrapper/PageWrapper";
import RoulettePage from "./pages/RoulettePage/RoulettePage";
import SlotsPage from "./pages/SlotsPage/SlotsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoulettePage />
  },
  {
    path: "/slots",
    element: <SlotsPage />
  }
]);

function App() {
  return (
    <PageWrapper>
      <RouterProvider router={router} />
    </PageWrapper>
  );
}

export default App;
