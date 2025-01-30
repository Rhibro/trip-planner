import './App.css';
import Header from './components/Header';
import ActivityForm from './components/activities/ActivityForm';
import ActivityList from './components/activities/ActivityList';
import { useState } from 'react';
import RotatingBackground from './components/RotatingBackground';
import WeatherAPI from './components/WeatherAPI';
import Footer from './components/Footer';


function App() {
  const [activities, setActivities] = useState(() => {
    // loads activities from local storage 
    const savedActivities = localStorage.getItem('activities');
    return savedActivities ? JSON.parse(savedActivities).map(activity => ({
      ...activity,
      dates: new Date(activity.dates) // Convert string back to Date object
    })) : [];
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

  const editActivity = (index, updatedActivity) => {
    const updatedActivities = activities.map((activity, i) =>
      i === index ? { ...updatedActivity, dates: new Date(updatedActivity.dates) } : activity
    );
    setActivities(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities)); // Save to local storage
  };
  

  return (
    <>
      <RotatingBackground>
        <header>
          <div className='weatherSection'>
            <WeatherAPI />
          </div>
          <Header />
        </header>
      </RotatingBackground>
        <main>
          <ActivityForm addActivity={addActivity} />
          <ActivityList activities={activities} deleteActivity={deleteActivity} editActivity={editActivity}/>
        </main>
     
    </>
  );
}

export default App;
