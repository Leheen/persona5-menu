import React from 'react';

import Star from './Star';

const StarBackground = () => (
    <div className='stars'>
        <Star height="25%" width="25%" top="15%" left="67%" angle={4} />
        <Star height="31%" width="31%" top="-18%" left="69%" angle={0} />
        <Star height="40%" width="40%" top="28%" left="67%" />
        <Star height="35%" width="35%" top="6%" left="80%" angle={35} color="#646464" reverseAnimation />
        <Star height="50%" width="50%" top="8%" left="85%" angle={15} />
        <Star height="20%" width="20%" top="-6%" left="90%" angle={27} />
        <Star height="31%" width="31%" top="-25%" left="50%" angle={-9} color="#646464" reverseAnimation />
        <Star height="37%" width="31%" top="58%" left="29%" angle={-9} />
    </div>
);

export default StarBackground;