import './App.css'
import Header from './components/Header'
import ActivityForm from './components/ActivityForm'
import ActivityList from './components/ActivityList'
// import ActivityItem from './components/ActivityItem'
import { useState, useEffect } from 'react'

function App() {
  const [activities, setActivities] = useState(() => {
    // loads activities from local storage 
    const savedActivities = localStorage.getItem('activities');
    return savedActivities ? JSON.parse(savedActivities) : [];
  });

  const addActivity = (activity) => {
    const updatedActivities = [...activities, activity];
    setActivities(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities)); // Save to local storage
  };

  const deleteActivity = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities)); // Save to local storage
  };

  return (
    <>
      <Header />
      <main>
        <ActivityForm addActivity={addActivity} />
        <ActivityList activities={activities} deleteActivity={deleteActivity} />
      </main>
    </>
  )
}

export default App
