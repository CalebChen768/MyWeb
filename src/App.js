import React from 'react';
import ToolBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const App = () => {
    return (
        <Router>
            <ToolBar />
            <div>
                <h1>你好，欢迎来到</h1>
            </div>
        </Router>



    );
};

export default App;
