import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Birthday Freebies</h1>
      <ul>
        <h2>
          About: You know how lots of places have blog posts about freebies on your birthday... but wouldn't it be so much easier if you just had a database of birthday freebies to access? Well this is it!
        </h2>
        <li>
          <Link to="stores">See all the stores</Link>
        </li>
      </ul>
    </div>
  );
}
