export default function ActivityItem({tripName, dates, location, onDelete}) {

    const formattedDate = dates instanceof Date ? dates.toLocaleDateString() : 'No date selected';

    return(
        <>
            <h3>{tripName}</h3>
            <h4>dates:</h4>
            <p>{formattedDate}</p>
            <h4>location:</h4>
            <p>{location}</p>
            <button className="deleteBtn" onClick={onDelete} >Delete</button>
        </>
    )
}