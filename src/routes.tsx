import { useRoutes } from "react-router-dom";
import Home from "./views/Home/Home";
import Memories from "./views/Memories/Memories";
export default function RouterUrl() {
  return useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/memories",
      element: <Memories />,
    },
  ]);
}
