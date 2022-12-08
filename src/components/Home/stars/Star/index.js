import React from 'react';

import './Star.scss';

const StarLine = ({ color }) => (
    <path fill={color} d="M406.89 355.24l-17.73-4-9.27-15.62-9.27 15.63-17.73 4 12 13.65-1.69 18.1 16.69-7.2 16.69 7.2-1.69-18.12zm-27 20.76l-13.31 5.74 1.31-14.39-9.57-10.88 14.14-3.18 7.43-12.47 7.39 12.47 14.14 3.18-9.53 10.88 1.35 14.43z" />
);

StarLine.defaultProps = {
    color: '#FFF'
};

const Star = ({ color, height, width, top, left, angle, reverseAnimation }) => {
    return (
        <div className={`star ${reverseAnimation ? 'star-reverse' : ''}`} style={{ height, width, top, left, transform: `rotate(${angle}deg)` }}>
            <svg viewBox="0 0 759.78 722.59">
                <clipPath id="starShape">
                    <path d="M760.71 276.98l-249.45-56.1L380.82.98 250.38 220.89.93 276.98l168.84 192-23.74 254.59 234.79-101.24 234.79 101.24-23.74-254.59 168.84-192z" />
                </clipPath>
                <g clipPath="url(#starShape)">
                    <path fill="#FFF" d="M406.89 355.24l-17.73-4-9.27-15.62-9.27 15.63-17.73 4 12 13.65-1.69 18.1 16.69-7.2 16.69 7.2-1.69-18.12zm-27 20.76l-13.31 5.74" />
                    {[...Array(7)].map((e, i) => (
                        <StarLine color={color} key={`star_line_${i}`} />
                    ))}
                </g>
            </svg>
        </div>
    );
};

Star.defaultProps = {
    color: '#000',
    angle: 0
};

export default Star;
