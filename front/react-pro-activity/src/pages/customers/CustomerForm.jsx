import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import TitlePage from "../../components/TitlePage";

export default function CustomerForm() {
  let navigate = useNavigate();
  let { id } = useParams();

  return (
    <>
      <TitlePage title={"Customer Details " + (id !== undefined ? id : "")}>
        <Button variant="outline-secondary" onClick={() => navigate("/customers/list")}>
          <i className="fas fa-arrow-left me-2"></i>
          Back
        </Button>
      </TitlePage>
      <div></div>
    </>
  );
}
