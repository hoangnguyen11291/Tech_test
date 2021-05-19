import React, { useEffect, useState } from "react";
import { Container, Row, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { leadActions } from "../redux/actions/lead.actions";

const Homepage = () => {
  const [addLead, setAddLead] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    location_type: "",
    location_string: "",
  });
  const leads = useSelector((state) => state.lead.leads);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(leadActions.leadRequest());
  }, []);

  const handleChange = (e) => {
    setAddLead({ ...addLead, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      mobile,
      location_type,
      location_string,
    } = addLead;
    dispatch(
      leadActions.addLeads({
        first_name,
        last_name,
        email,
        mobile,
        location_type,
        location_string,
      })
    );
    e.target.reset();
  };

  return (
    <>
      <Container fluid>
        <Button onSubmit={handleSubmit}>ADD LEAD</Button>

        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Num</th>
                <th>Location Type</th>
                <th>Location String</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {leads &&
                leads.map((item) => (
                  <tr key={item._id}>
                    <td>{`${item.first_name} ${item.last_name}`}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.location_type}</td>
                    <td>{item.location_string}</td>
                    <th>
                      <span>
                        <Button>Mark Update</Button>
                      </span>
                      <Button>DELETE</Button>
                    </th>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
