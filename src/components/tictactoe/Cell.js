import React from 'react';

const person = {
    name: 'nhat',
    age: 12,
}

const {name,age} = person
console.log(name,age)
const Cell = ({value,onClick,className}) => {
    return (
        <div className={`Board-Cell ${className}`} onClick={onClick}>
           {value}
        </div>
    );
};

export default Cell;