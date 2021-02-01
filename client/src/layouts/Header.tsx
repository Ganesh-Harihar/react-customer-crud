import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./Header.css"
function Header() {
  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Navbar.Brand href="#home">Customer-CRUD</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Button variant="outline-secondary" className="add-btn">Add</Button>
    </Navbar>
  );
}

export default Header;
