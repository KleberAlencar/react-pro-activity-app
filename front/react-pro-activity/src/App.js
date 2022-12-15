import { useEffect, useState } from "react";
import "./App.css";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

function App() {
  const [index, setIndex] = useState(0);
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState({ id: 0 });

  useEffect(() => {
    activities.length <= 0
      ? setIndex(1)
      : setIndex(
          Math.max.apply(
            Math,
            activities.map((item) => item.id)
          ) + 1
        );
  }, [activities]);

  function addActivity(activity) {
    setActivities([...activities, { ...activity, id: index }]);
  }

  function cancelActivity() {
    setSelectedActivity({ id: 0 });
  }

  function updateActivity(activity) {
    setActivities(
      activities.map((item) => (item.id === activity.id ? activity : item))
    );
    setSelectedActivity({ id: 0 });
  }

  function deleteActivity(id) {
    const filteredActivities = activities.filter(
      (activity) => activity.id !== id
    );
    setActivities([...filteredActivities]);
  }

  function getActivity(id) {
    const activity = activities.filter((activity) => activity.id === id);
    setSelectedActivity(activity[0]);
  }

  return (
    <>
      <ActivityForm
        addActivity={addActivity}
        cancelActivity={cancelActivity}
        updateActivity={updateActivity}
        selectedActivity={selectedActivity}
        activities={activities}
      />
      <ActivityList
        deleteActivity={deleteActivity}
        getActivity={getActivity}
        activities={activities}
      />
    </>
  );
}

export default App;
