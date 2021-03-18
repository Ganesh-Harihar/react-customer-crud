import Table from "react-bootstrap/Table";
function CustomerList() {
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
          <td>Ganesh </td>
          <td>Harihar</td>
          <td>Employed</td>
          <td>14/04/1998</td>
          <td>Active</td>
          <td>Software Engineer</td>
          <td>
            <i className='bx bx-edit bx-sm mr-2' role="button"></i>
            <i className='bx bx-trash bx-sm' role="button"></i>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CustomerList;
