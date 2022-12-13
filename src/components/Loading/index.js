import React, { useState, useEffect } from 'react';

import FlipLoading from '../common/loading/FlipLoading';
import SpotlightLoading from '../common/loading/SpotlightLoading';

import './Loading.scss';

const Loading = () => {
    const [num, setNum] = useState();

    useEffect(() => {
        setNum(Math.round(Math.random()));
    }, []);

    return (
        <div className="container-loading">
            {num === 0 && <FlipLoading />}
            {num === 1 && <SpotlightLoading />}
        </div>
    );
};

export default Loading;