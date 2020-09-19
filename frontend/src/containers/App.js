import React from 'react'
import Details from './Details'
import SideBar from './SideBar'
import '../static/css/App.css';
export default function App() {
    return (
        <div className="app">
            <SideBar />
            <Details/>
        </div>
    )
}
