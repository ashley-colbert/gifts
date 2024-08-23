import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
      <nav>
        <Link to ="/" className="nav-link">Home </Link> || 
        <Link to ="/gifts1" className="nav-link"> Gifts Under $20 </Link> || 
        <Link to ="/gifts2" className="nav-link"> Teen Gift Ideas </Link> || 
        <Link to ="/gifts3" className="nav-link"> Kids Gift Ideas </Link> || 
        <Link to ="/gifts4" className="nav-link"> Baby Gift Ideas </Link> || 
        <Link to ="/gifts5" className="nav-link"> Gifts for Pets</Link>
      </nav>
      <h1>Find a Gift for Everyone</h1>
      <p>Best ideas for everyone on your list!</p>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;