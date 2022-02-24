import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

import NavigationFeature from './features/nav/Navigation.feature';
import rootStyles from "./styles/root.css";
import NavigationFeatureStyles from '~/features/nav/Navigation.feature.css';


export function links() {
  return [
    {
      rel: "stylesheet",
      href: rootStyles
    },
    {
      rel: "stylesheet",
      href: NavigationFeatureStyles
    },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* nav and page-wrapper */}
        <NavigationFeature></NavigationFeature>
        <div className="page-content">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
