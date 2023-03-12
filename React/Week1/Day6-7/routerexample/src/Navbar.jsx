import { Link } from "react-router-dom";
export const Navbar = () => {
return(
    <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);
}