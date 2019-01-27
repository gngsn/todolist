import React,{ Component } from 'react';
import './Palette.css';

const Color = ({ color, active, onClick }) => {
    return (
        <div className="color" style ={{ background: color}} onClick={onClick}>
        </div>
    );
};

const Palette = ({colors, selected, onSelect}) => {
    const colorList = colors.map(
        (color) => (<Color color ={color} onClick={() => onSelect(color)} key ={color} />));
    return(
        <div className="palette">
            {colorList}
        </div>
    )

};

export default Palette;
