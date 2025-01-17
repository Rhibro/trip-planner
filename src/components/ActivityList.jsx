import ActivityItem from './ActivityItem';

export default function ActivityList({activities, deleteActivity}) {
    return (
        <ul>
            {activities.map((activity, index) => (
                <li key={index}>
                    <ActivityItem 
                        tripName={activity.tripName} 
                        dates={activity.dates} 
                        location={activity.location} 
                        onDelete={() => deleteActivity(index)}
                    />
                </li>
            ))}
        </ul>
    )
}