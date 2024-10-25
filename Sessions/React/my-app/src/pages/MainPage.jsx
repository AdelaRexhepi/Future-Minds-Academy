import { Outlet } from "react-router";
import Nav from "../components/Nav";

function MainPage() {
    return(
        <>
        <Nav />
        <h1>My App</h1>

        <main>
            <Outlet />
        </main>

        <footer>
            <p>&copy; 2024 My App. All rights reserved.</p>
        </footer>
        </>
    )
}
export default MainPage;