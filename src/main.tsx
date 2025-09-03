import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { createRoot } from "react-dom/client";
import './index.css'
import { LayoutLanding } from './app/layout/LayoutLanding.tsx';
import { Hero } from "./app/routes/Hero.tsx";

let router = createBrowserRouter([
  {
    // no path on this parent route, just the component
    Component: LayoutLanding,
    children: [
      { index: true, Component: Hero },
      // { path: "contact", Component: Contact },
    ],
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
