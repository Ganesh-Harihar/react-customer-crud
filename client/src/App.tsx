import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layouts/Header";
import Container from "react-bootstrap/Container";
import CustomerList from "./components/CustomerList";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import history from "./services/History";
import CustomerDetails from "./components/CustomerDetails";
function App() {
  return (
    <Router history={history}>
      <BrowserRouter>
        <Container fluid="md">
          <Header></Header>
          <Switch>
            <Route exact path="/" component={CustomerList} />
            <Route path="/:id" component={CustomerDetails} />
          </Switch>
        </Container>
      </BrowserRouter>
    </Router>
  );
}

export default App;
