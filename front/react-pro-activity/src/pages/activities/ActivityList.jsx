import React from 'react'
import ActivityItem from './ActivityItem'

export default function ActivityList(props) {
  return (
    <div className="mt-3">
    <ul className="list-group">
      {props.activities.map((activity) => (
        <ActivityItem
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
