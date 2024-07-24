import React from 'react';
import { MuiMarkdown } from 'mui-markdown';

const PlacesComponent = ({ text }) => {

    return (
        <div>
            <MuiMarkdown>{text}</MuiMarkdown>
        </div>
    );
};

export default PlacesComponent;

