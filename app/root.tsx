import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Main from "./components/layout/main";
import tailwindStylesheetUrl from "./styles/app.css";


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anek+Latin&family=Open+Sans&display=swap" }
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" data-theme="corporate" style={{
      fontFamily: "Anek Latin, sans-serif",
    }}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Main>
          <Outlet />
        </Main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
