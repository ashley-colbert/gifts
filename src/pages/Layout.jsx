import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
      <nav>
        <Link to ="/" className="nav-link">Home </Link> || 
        <Link to ="/gifts1" className="nav-link"> Fall Decor </Link> || 
        <Link to ="/gifts2" className="nav-link"> Teen Costumes </Link> || 
        <Link to ="/gifts3" className="nav-link"> Kids Costumes </Link> || 
        <Link to ="/gifts4" className="nav-link"> Baby Costumes </Link> || 
        <Link to ="/gifts5" className="nav-link"> Pet Costumes</Link>
      </nav>
      <h1>Great Deals for Everyone</h1>
      <p>Best ideas for everyone on your list!</p>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;