import{FaSignOutAlt,FaShower,FaShuttleVan,FaSmile} from 'react-icons/fa'
import React  from 'react'

export const Sidebar =()=>{
return (
<div className='sidebar'>
    <ul>
        <li><span><FaSignOutAlt /></span><span>inbox</span></li>
        <li><span><FaShower /></span><span>today</span></li>
        <li><span><FaShuttleVan /></span><span>upcoming</span></li>
        <li><span><FaSmile /></span><span>next 7 days</span></li>
    </ul>
<div>
    <h2>Projects</h2>
</div>
    <ul>
        <li>project components here</li>
    </ul>
</div>
)
}