import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editModal } from "../redux";
import Http from "../services/Http";

function CustomerList() {
  const httpService = new Http();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    httpService
      .fetch("api/customers")
      .then((res: any) => {
        console.log("res", res.data.data);
        setCustomers(res.data.data);
      })
      .catch((error: any) => console.log("Error:", error));
  }, []);

  const dispatch = useDispatch();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Occupation</th>
          <th>DOB</th>
          <th>Status</th>
          <th>Bio</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer: any, index: number) => {
          <tr>
            <th>{index + 1}</th>
            <td>
              <Link to="/1">{customer.firstName}</Link>
            </td>
            <td>{customer.lastName}</td>
            <td>{customer.occupation}</td>
            <td>{customer.dob}</td>
            <td>{customer.status}</td>
            <td>{customer.bio}</td>
            <td>
              <i
                className="bx bx-edit bx-sm mr-2"
                role="button"
                onClick={() => dispatch(editModal())}
              ></i>
              <i className="bx bx-trash bx-sm" role="button"></i>
            </td>
          </tr>;
        })}
      </tbody>
    </Table>
  );
}

export default CustomerList;
