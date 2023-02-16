import React from 'react';
export const Today = ({day,month,year}) => {
    return (
        <div className='datum'>
        <span className='day'> {day} </span>
        <span className='month'> {month}</span>
        <span className='year'> {year}</span>
        </div>
    )
}