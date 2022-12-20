import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import TitlePage from "../../components/TitlePage";
import { useHistory } from "react-router-dom";

const customers = [
  {
    id: 1,
    name: "Microsoft",
    responsible: "Otto",
    contact: "997432323",
    status: "Active",
  },
  {
    id: 2,
    name: "Amazon",
    responsible: "Willian",
    contact: "997432323",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Google",
    responsible: "Otto",
    contact: "997432323",
    status: "Active",
  },
  {
    id: 4,
    name: "Facebook",
    responsible: "Kevin",
    contact: "997432323",
    status: "Active",
  },
  {
    id: 5,
    name: "Twitter",
    responsible: "Jack",
    contact: "997432323",
    status: "Active",
  },
];

export default function CustomerList() {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCustomers = customers.filter((customer) => {
    return Object.values(customer)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  const addCustomer = () => {
    history.push("/customer/detail");
  };

  return (
    <>
      <TitlePage title="Customer List">
        <Button variant="outline-secondary" onClick={addCustomer}>
          <i className="fas fa-plus me-2"></i>
          New Customer
        </Button>
      </TitlePage>
      <InputGroup className="mt-3 mb-3">
        <InputGroup.Text>Search:</InputGroup.Text>
        <FormControl
          placeholder="Search by customer name"
          onChange={handleInputChange}
        />
      </InputGroup>
      <table className="table table-striped table-hover">
        <thead className="table-dark mt-3">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Responsible</th>
            <th scope="col">Contact</th>
            <th scope="col">Status</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.responsible}</td>
              <td>{customer.contact}</td>
              <td>{customer.status}</td>
              <td>
                <div>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() =>
                      history.push(`/customers/details/${customer.id}`)
                    }
                  >
                    <i className="fas fa-user-edit me-2"></i>
                    Edit
                  </button>
                </div>
                <div>
                  <button className="btn btn-sm btn-outline-danger me-2">
                    <i className="fas fa-user-times me-2"></i>
                    Inactivate
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
