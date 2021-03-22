import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editModal } from "../redux";


function CustomerList() {
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
        <tr>
          <th></th>
          <td><Link to="/1">Ganesh</Link></td>
          <td>Harihar</td>
          <td>Employed</td>
          <td>14/04/1998</td>
          <td>Active</td>
          <td>Software Engineer</td>
          <td>
            <i className='bx bx-edit bx-sm mr-2' role="button" onClick={()=> dispatch(editModal()) } ></i>
            <i className='bx bx-trash bx-sm' role="button"></i>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CustomerList;
