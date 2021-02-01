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
        </tr>
      </tbody>
    </Table>
  );
}

export default CustomerList;
