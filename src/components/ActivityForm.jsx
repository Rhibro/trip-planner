export default function ActivityForm() {
    

    function handleInputOnChange(event) {
        text = event.target.value;
    }

    function handleBtnClick() {
        updateActivityList(text);
    }

    return(
        <>
            <form>
                <h2>Enter Trip Info</h2>
                <label>name:</label>
                    <input  
                        type="text"
                        placeholder="What will you do?"
                        onChange={handleInputOnChange}>
                    </input>
                <label>dates:</label>
                    <input  
                        type="text"
                        placeholder="How long will you be away?"
                        onChange={handleInputOnChange}>
                    </input>
                <label>location:</label>
                    <input  
                        type="text"
                        placeholder="Where will you go?"
                        onChange={handleInputOnChange}>
                    </input>
                <button onClick={handleBtnClick}>submit!</button>
            </form>
        </>
    )
}