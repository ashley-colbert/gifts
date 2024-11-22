import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
      <nav>
        <Link to ="/" className="nav-link">Home </Link> || 
        <Link to ="/deals" className="nav-link"> Best Deals </Link> || 
        <Link to ="/kids" className="nav-link"> Kid's Gifts</Link> || 
        <Link to ="/teens" className="nav-link"> Teen's Gifts</Link> || 
        <Link to ="/pets" className="nav-link"> Pet's Gifts</Link> ||
        <Link to ="/vinyl" className="nav-link"> Vinyl Records</Link> ||
        <Link to ="/parents" className="nav-link"> Mom and Dad</Link> ||
        <Link to ="/custom" className="nav-link"> Custom Requests</Link>

      </nav>
      <h1>Great Deals for Everyone</h1>
      <p>Best ideas for everyone on your list!</p>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;