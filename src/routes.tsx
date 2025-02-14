import { useRoutes } from "react-router-dom";
import Home from "./views/Home/Home";
import Memories from "./views/Memories/Memories";
import Plan from "./views/Plan/Plan";
import Endd from "./views/End/End";

export default function RouterUrl() {
  return useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/memories",
      element: <Memories />,
    },
    {
      path: "/plan",
      element: <Plan />,
    },
    {
      path: "/end",
      element: <Endd />,
    },
  ]);
}
