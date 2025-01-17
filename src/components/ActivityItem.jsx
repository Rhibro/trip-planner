export default function ActivityItem({tripName, dates, location, onDelete}) {
    return(
        <>
            <h3>{tripName}</h3>
            <h4>dates:</h4>
            <p>{dates}</p>
            <h4>location:</h4>
            <p>{location}</p>
            <button className="deleteBtn" onClick={onDelete} >Delete</button>
        </>
    )
}