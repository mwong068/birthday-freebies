import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Nav from '../components/Nav'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="text-center">
              <Nav />
        <h2 className=" pt-5">
          You know how lots of places have blog posts about freebies on your birthday...
        </h2>
        <h2 className=" pt-5">
          but wouldn't it be so much easier if you just had a database of birthday freebies to access?
        </h2>
        <h2 className=" pt-5">
          Well this is it!
        </h2>
        <ul className="pt-5">
          <li>
            <Link to="stores">See all the stores</Link>
          </li>
        </ul>
    </div>
  );
}
