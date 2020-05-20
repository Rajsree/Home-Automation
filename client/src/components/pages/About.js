import React from 'react'

function About() {
    return (
        <div>
           <h2>Technologies used</h2> 
           <ul style={{padding:'20px'}}>
            <li>Responsive CSS</li>
            <li>Database - MySQL</li>
            <li>Backend - Node.js</li>
            <li>Frontend - React.js</li>
            <li>Framework - Express framework</li>
           </ul>
           <h2>Scenarios</h2>
           <ul style={{padding:'20px'}}>
            <li>List all smart devices</li>
            <li>Add new smart device</li>
            <li>Perform an operation on a device</li>
            <li>Remove an installed device</li>
           </ul>
        </div>
    )
}

export default About;
