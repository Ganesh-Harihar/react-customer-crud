import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import CustomerForm from "../components/CustomerForm";
import {Link} from 'react-router-dom';
function Header() {
  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Navbar.Brand><Link to="/" className="text-decoration-none text-white">Customer-CRUD</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <CustomerForm />
    </Navbar>
  );
}

export default Header;
