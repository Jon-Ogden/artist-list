import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return(
        <div className="app-container">
            <div className="navbar">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/Artists">Artists</Link>
                <Link className="link" to="/AddNew">Add New</Link>
                <Link className="link" to="/About">About</Link>
            </div>
            <div className="outlet">
                <Outlet />
            </div>
            <div className="footer">
                <p>Copyright 2022</p>
            </div>
        </div>
    )
}
