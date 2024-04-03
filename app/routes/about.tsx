import { Outlet } from "@remix-run/react";
import Nav from '../components/Nav'

export default function AboutRoute() {
  return (
    <div className="text-center">
        <Nav />
      <h1>About</h1>
    </div>
  );
}