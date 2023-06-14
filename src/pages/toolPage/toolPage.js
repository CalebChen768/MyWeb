// ToolPage.js

import React from 'react';
import ToolCard from './toolCard';

class ToolPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: [
                {
                    id: 1,
                    title: 'Tool 1',
                    description: 'This is the first tool.',
                },
                {
                    id: 2,
                    title: 'Tool 2',
                    description: 'This is the second tool.',
                },
                // Add more tools as needed
            ],
        };
    }

    render() {
        const { tools } = this.state;

        return (
            <div>
                <h1>Personal Tools</h1>
                <div className="tool-container">
                    {tools.map(tool => (
                        <ToolCard key={tool.id} tool={tool} />
                    ))}
                </div>
            </div>
        );
    }
}

export default ToolPage;
