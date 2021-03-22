import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import CustomerForm from "../components/CustomerForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { addModal } from "../redux";

function Header() {
  const dispatch = useDispatch();
  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Navbar.Brand>
        <Link to="/" className="text-decoration-none text-white">
          Customer-CRUD
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Button
        variant="outline-secondary"
        className="add-btn"
        onClick={() => dispatch(addModal())}
      >
        Add
      </Button>
      <CustomerForm />
    </Navbar>
  );
}

export default Header;
