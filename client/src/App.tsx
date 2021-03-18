import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layouts/Header";
import Container from "react-bootstrap/Container";
import CustomerList from "./components/Customer-list";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import history from './services/History';
function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Container fluid="md">
          <Header></Header>
          <Switch>
            <Route exact path="/" component={CustomerList}></Route>
          </Switch>
        </Container>
      </Router>
    </BrowserRouter>
  );
}

export default App;
