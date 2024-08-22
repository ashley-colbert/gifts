import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
      <nav>
        <Link to ="/">Home </Link> || 
        <Link to ="/gifts1"> Gifts Under $20 </Link> || 
        <Link to ="/gifts2"> Teen Gift Ideas </Link> || 
        <Link to ="/gifts3"> Kids Gift Ideas </Link> || 
        <Link to ="/gifts4"> Baby Gift Ideas </Link> || 
        <Link to ="/gifts5"> Best Deals</Link>
      </nav>
      <Outlet />
      <h1>Find a Gift for Everyone</h1>
      <p>Best ideas for everyone on your list!</p>
    </header>
    </>
  );
}

export default Layout;