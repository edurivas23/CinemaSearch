import { Outlet, } from "react-router";
import { Footer } from "./Footer";





export function RootLayout() {


    return (
        <div className="bg-neutral-900 z-10 box-border min-h-screen flex flex-col justify-between">
            <Outlet />
            <Footer />
        </div>
    )
}