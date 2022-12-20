import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ActivityForm from "./ActivityForm";
import ActivityList from "./ActivityList";
import api from "../../api/activity";
import TitlePage from "../../components/TitlePage";

export default function Activity() {
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [smShowConfirmModal, setSmShowConfirmModal] = useState(false);
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState({ id: 0 });

  const toogleActivityModal = () => setShowActivityModal(!showActivityModal);
  const toogleConfirmModal = (id) => {
    if (id !== 0 && id !== undefined) {
      const activity = activities.filter((activity) => activity.id === id);
      setSelectedActivity(activity[0]);
    } else {
      setSelectedActivity({ id: 0 });
    }

    setSmShowConfirmModal(!smShowConfirmModal);
  };

  const searchActivities = async () => {
    const response = await api.get("activity");
    return response.data;
  };

  const newActivity = () => {
    setSelectedActivity({ id: 0 });
    toogleActivityModal();
  };

  useEffect(() => {
    const searchActivitiesList = async () => {
      const activitiesList = await searchActivities();
      if (activitiesList) {
        setActivities(activitiesList);
      }
    };
    searchActivitiesList();
  }, []);

  const addActivity = async (activity) => {
    toogleActivityModal();
    const response = await api.post("activity", activity);
    setActivities([...activities, response.data]);
  };

  const cancelActivity = () => {
    setSelectedActivity({ id: 0 });
    toogleActivityModal();
  };

  const updateActivity = async (activity) => {
    toogleActivityModal();
    const response = await api.put(`activity/${activity.id}`, activity);
    const { id } = response.data;
    setActivities(
      activities.map((item) => (item.id === id ? response.data : item))
    );
    setSelectedActivity({ id: 0 });
  };

  const deleteActivity = async (id) => {
    toogleConfirmModal(0);
    if (await api.delete(`activity/${id}`)) {
      const filteredActivities = activities.filter(
        (activity) => activity.id !== id
      );
      setActivities([...filteredActivities]);
    }
  };

  const getActivity = (id) => {
    const activity = activities.filter((activity) => activity.id === id);
    setSelectedActivity(activity[0]);
    toogleActivityModal();
  };

  return (
    <>
      <TitlePage
        title={
          "Activity " + (selectedActivity.id !== 0 ? selectedActivity.id : "")
        }
      >
        <Button variant="outline-secondary" onClick={newActivity}>
          <i className="fas fa-plus"></i>
        </Button>
      </TitlePage>

      <ActivityList
        getActivity={getActivity}
        activities={activities}
        toogleConfirmModal={toogleConfirmModal}
      />

      <Modal show={showActivityModal} onHide={toogleActivityModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Activity {selectedActivity.id !== 0 ? selectedActivity.id : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ActivityForm
            addActivity={addActivity}
            cancelActivity={cancelActivity}
            updateActivity={updateActivity}
            selectedActivity={selectedActivity}
            activities={activities}
          />
        </Modal.Body>
      </Modal>

      <Modal size="sm" show={smShowConfirmModal} onHide={toogleConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Deleting Activity{" "}
            {selectedActivity.id !== 0 ? selectedActivity.id : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Confirm deletion of activity {selectedActivity.id}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <button
            className="btn btn-outline-success me-2"
            onClick={() => deleteActivity(selectedActivity.id)}
          >
            <i className="fas fa-check me-2"></i>
            Yes
          </button>
          <button
            className="btn btn-danger me-2"
            onClick={() => toogleConfirmModal(0)}
          >
            <i className="fas fa-times me-2"></i>
            No
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}