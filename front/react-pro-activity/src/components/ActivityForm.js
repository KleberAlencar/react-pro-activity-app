import React, { useEffect, useState } from "react";

const initialActivity = {
  id: 0,
  title: "",
  priority: 0,
  description: "",
};

export default function ActivityForm(props) {
  const [activity, setActivity] = useState(currentActivity());

  useEffect(() => {
    if (props.selectedActivity.id !== 0) setActivity(props.selectedActivity);
  }, [props.selectedActivity]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setActivity({ ...activity, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (props.selectedActivity.id !== 0)
    {
      props.updateActivity(activity);
    } else {
      props.addActivity(activity);
    }

    setActivity(initialActivity);
  }

  const cancelHandler = (e) => {
    e.preventDefault();

    props.cancelActivity()

    setActivity(initialActivity);
  };

  function currentActivity() {
    if (props.selectedActivity.id !== 0) {
      return props.selectedActivity;
    } else {
      return initialActivity;
    }
  }

  return (
    <>
      <h1>Activity {activity.id !== 0 ? activity.id : ""}</h1>
      <form className="row g-3" onSubmit={submitHandler}>
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={activity.title}
            onChange={inputTextHandler}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Priority</label>
          <select
            name="priority"
            value={activity.priority}
            onChange={inputTextHandler}
            id="priority"
            className="form-select"
          >
            <option defaultValue="0">Choose...</option>
            <option value="1">Low</option>
            <option value="2">Normal</option>
            <option value="3">High</option>
          </select>
        </div>
        <div className="col-md-12">
          <label className="form-label">Description</label>
          <textarea
            id="description"
            type="text"
            name="description"
            value={activity.description}
            onChange={inputTextHandler}
            className="form-control"
          />
          <hr />
        </div>
        <div className="col-12 mt-0">
          {activity.id === 0 ? (
            <button
              className="btn btn-outline-secondary"
              type="submit"
            >
              <i className="fas fa-plus me-2"></i>
              Activity
            </button>
          ) : (
            <>
              <button className="btn btn-outline-success me-2" type="submit">
                <i className="fas fa-plus me-2"></i>
                Save
              </button>
              <button
                className="btn btn-outline-warning"
                onClick={cancelHandler}
              >
                <i className="fas fa-plus me-2"></i>
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
}
