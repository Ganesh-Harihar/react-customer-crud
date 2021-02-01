import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layouts/Header";
import Container from "react-bootstrap/Container";
import CustomerList from "./components/Customer-list";
import CustomerForm from "./components/Customer-form";
function App() {
  return (
    <Container fluid="md">
      <Header></Header>
      <CustomerList></CustomerList>
      <CustomerForm></CustomerForm>
    </Container>
  );
}

export default App;
