import { Outlet } from "@remix-run/react";
import Nav from '../components/Nav'

export default function StoresRoute() {
  return (
    <div className="text-center">
        <Nav />
      <h1>List of stores</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}