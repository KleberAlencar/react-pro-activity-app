import React from "react";

export default function Activity(props) {
  function priorityLabel(choice) {
    switch (choice) {
      case 'Low':
      case 'Normal':
      case 'High':
        return choice;

      default:
        return "Not Defined";
    }
  }

  function priorityImage(choice, icon) {
    switch (choice) {
      case 'Low':
        return icon ? "smile" : "success";
      case 'Normal':
        return icon ? "meh" : "dark";
      case 'High':
        return icon ? "frown" : "warning";

      default:
        return "Not Defined";
    }
  }

  return (
    <div
      className={
        "card mb-2 shadow-sm border-" +
        priorityImage(props.activity.priority, true)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-1">{props.activity.id}</span>
            - {props.activity.title}
          </h5>
          <h6>
            Priority:
            <span
              className={"ms-1 text-" + priorityImage(props.activity.priority)}
            >
              <i
                className={
                  "me-1 far fa-" + priorityImage(props.activity.priority, true)
                }
              ></i>
              {priorityLabel(props.activity.priority)}
            </span>
          </h6>
        </div>
        <p className="card-text">
          {props.activity.id} - {props.activity.description}
        </p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => props.getActivity(props.activity.id)}
          >
            <i className="fas fa-pen me-2"></i>
            Edit
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => props.toogleConfirmModal(props.activity.id)}
          >
            <i className="fas fa-trash me-2"></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
