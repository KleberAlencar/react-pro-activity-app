import React from 'react'
import Activity from './Activity'

export default function ActivityList(props) {
  return (
    <div className="mt-3">
    <ul className="list-group">
      {props.activities.map((activity) => (
        <Activity
          key={activity.id}
          activity={activity}
          getActivity={props.getActivity}
          toogleConfirmModal={props.toogleConfirmModal}
        />
      ))}
    </ul>
  </div>
  )
}
