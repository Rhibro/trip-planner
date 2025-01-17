import './App.css'
import Header from './components/Header'
import ActivityForm from './components/ActivityForm'
import ActivityList from './components/ActivityList'
import ActivityItem from './components/ActivityItem'
import { useState } from 'react'

function App() {

  return (
    <>
      <Header />
      <main>
        <ActivityForm />
        <ActivityList>
          <ActivityItem />
        </ActivityList>
      </main>
    </>
  )
}

export default App
