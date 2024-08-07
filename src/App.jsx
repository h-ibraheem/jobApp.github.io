import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouyts/MainLayout";
import HomePage from "./pages/HomePage";
import JobPages from "./pages/JobPages";
import JobPage, {jobLoader} from "./pages/JobPage";
import NotfoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobPages />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="*" element={<NotfoundPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
