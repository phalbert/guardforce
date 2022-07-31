import { Link, Outlet } from "@remix-run/react";
import { services } from "~/components/layout/navbar";

export default function Services() {
  return (
    <main>
      <h1 className="text-xl font-semibold mb-4">Services</h1>
      <div className="flex">
        <ul className="menu menu-vertical w-64 bg-base-200 p-4 border-b-2 border-neutral mr-8">
          {services.map((service: any) => (
            <li key={service.name}>
              <Link to={`/services${service.path}`}>
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
