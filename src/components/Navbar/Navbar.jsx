import "./Navbar.css";

export function Navbar() {
    return (
        <nav className="navbar-container">
            <div>
                <img className="navbar-logo" src="https://www.flatandflatmates.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fnavbar-logo.3d62e4d8.svg&w=384&q=75" alt="logo" />
            </div>
            <div className="navbar-list">
                <button>Home</button>
                <button>For Tenants</button>
                <button>For Flatmates</button>
                <button>For PG/Hostel</button>
                <button>For Owners</button>
            </div>
            <div className="header-nav-button">
                <button className="create-btn">Create Your Listing</button>
                <button className="auth-btn">Login/Signup</button>
            </div>
        </nav>
    )
}