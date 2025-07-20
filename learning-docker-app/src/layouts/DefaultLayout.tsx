import { Outlet } from "react-router-dom"


const DefaultLayout = () => {

    return (
        <div className="min-h-screen">
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export {DefaultLayout};