import { ContractStrip, Navbar, Footer } from "./navbar";

export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            <ContractStrip />
            <Navbar />
            <main className="px-24 pb-16 pt-24">
                {children}
            </main>
            <Footer />
        </div>

    );
}
