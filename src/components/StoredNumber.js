import React from 'react'
import '../App.css';

export default function StoredNumber(props) {
    return (
        <div className="StoredNumber">
         {props.number}
        </div>
    )
}
