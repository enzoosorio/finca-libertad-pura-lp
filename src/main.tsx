import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { createRoot } from "react-dom/client";
import './index.css'
import { LayoutLanding } from './app/layout/LayoutLanding.tsx';
import { Hero } from "./app/routes/Hero.tsx";
import { NotFound } from "./app/routes/NotFound.tsx";
import { Experiences } from "./app/routes/Experiences.tsx";

let router = createBrowserRouter([
  {
    // no path on this parent route, just the component
    Component: LayoutLanding,
    children: [
      { index: true, Component: Hero },
      {path: '/experiences', Component: Experiences}
    ],
  },
  {
    // Ruta independiente para 404 (sin layout)
    path: "*",
    Component: NotFound,
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
