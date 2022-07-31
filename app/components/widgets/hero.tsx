import { Link } from "@remix-run/react";

export default function Hero() {
    return (
        <div className="hero min-h-48 bg-none-100">
            <div className="hero-content flex-col lg:flex-row lg:items-start">
                <img src="https://placeimg.com/640/480/arch" alt="" className="max-w-md rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">Welcome to Guardforce Security Services!</h1>
                    <p className="py-4">Guard Force Security are PSA (Private Security Authority) licensed specialists in security services in Uganda. We provide a range of services that can be tailored to your needs.
                        As a Security Company, we deliver a range of high quality retail security services. With a large network of guards in cities and towns throughout Uganda,
                        we have well equipped search and response units that make patrols of clients premises. Identifying synergies possible allows us to provide high quality services to our customers.</p>
                    <Link to="/contact" className="btn btn-primary">Place Order</Link>
                </div>
            </div>
        </div>
    );
}

export function AboutHero() {
    return (
        <div className="hero min-h-48 bg-none-100">
            <div className="hero-content flex-col lg:flex-row lg:items-start">
                <div>
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="py-4">We are a PSA (Private Security Authority) approved company operating in the West and Midlands.
                        We provide Mobile Patrol and Security Guard services in Galway, Mayo,Sligo, Athlone, Tullamore and the surrounding areas.
                        Established in 1995, the company has grown steadily since then and we have established a reputation for
                        professional service with a focus on building quality customer relationships.
                    </p>
                    <div>
                        <h1 className="text-xl font-bold">Mission Statement</h1>
                        <p>To provide safe and secure environments through honest engagement and respect for people and our clients.</p>
                        <h1 className="text-xl font-bold">Vision Statement</h1>
                        <p>To be the leading provider of security solutions across East Africa.</p>
                    </div>
                </div>
                <img src="https://placeimg.com/640/480/arch" alt="" className="max-w-md rounded-lg shadow-2xl" />
            </div>
        </div>
    );
}