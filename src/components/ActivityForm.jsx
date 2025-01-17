import { useState } from "react";

export default function ActivityForm({ addActivity }) {
    const [text, setText] = useState('');
    const [dates, setDates] = useState('');
    const [location, setLocation] = useState('');

    function handleInputOnChange(event) {
        const { name, value } = event.target;
        if (name === 'activity') setText(value);
        else if (name === 'dates') setDates(value);
        else if (name === 'location') setLocation(value);
    }

    function handleBtnClick(event) {
        event.preventDefault();
        if (text && dates && location) { //checks if fields are not empty
        addActivity({tripName: text, dates, location});
        setText('');
        setDates('');
        setLocation('');
        }
    }

    return(
        <>
            <form>
                <h2>Enter Trip Info</h2>
                <label>name:</label>
                    <input  
                        type="text"
                        name="activity"
                        placeholder="What will you do?"
                        value={text}
                        onChange={handleInputOnChange}>
                    </input>
                <label>dates:</label>
                    <input  
                        type="text"
                        name="dates"
                        placeholder="How long will you be away?"
                        value={dates}
                        onChange={handleInputOnChange}>
                    </input>
                <label>location:</label>
                    <input  
                        type="text"
                        name="location"
                        placeholder="Where will you go?"
                        value={location}
                        onChange={handleInputOnChange}>
                    </input>
                <button onClick={handleBtnClick} disabled={!text || !dates || !location} >submit!</button>
            </form>
        </>
    )
}