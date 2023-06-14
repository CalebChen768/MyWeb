// ToolCard.js

import React from 'react';

const ToolCard = ({ tool }) => {
    return (
        <div className="tool-card">
            <h2>{tool.title}</h2>
            <p>{tool.description}</p>
            {/* Add additional tool information or functionality */}
        </div>
    );
};

export default ToolCard;
