import React from 'react';

function Fallback(props) {
    return (
        <div> 
            <p>This URL has either been removed or was not found. </p>
            <a href='/'>Return to homepage</a>
        </div>
    );
};

export default Fallback;