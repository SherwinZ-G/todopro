import {FaPizzaSlice} from 'react-icons/fa'
import React  from 'react'

export const Header =()=>{
return (
    <nav>
        <div className="logo">
            <div>
                <ul>
                    <li>+</li>
                    <li><span><FaPizzaSlice /></span>pizza!</li>
                    <li>profile</li>
                </ul>
            </div>
        </div>
    </nav>
)
}