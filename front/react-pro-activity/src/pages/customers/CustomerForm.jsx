import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import TitlePage from "../../components/TitlePage";

export default function CustomerForm() {
  let history = useHistory();
  let { id } = useParams();

  return (
    <>
      <TitlePage title={"Customer Details " + (id !== undefined ? id : "")}>
        <Button variant="outline-secondary" onClick={() => history.push("/customers/list")}>
          <i className="fas fa-arrow-left me-2"></i>
          Back
        </Button>
      </TitlePage>
      <div></div>
    </>
  );
}
