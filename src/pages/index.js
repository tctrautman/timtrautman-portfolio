import React, { Component } from 'react';
import Intro from '../components/Intro';
import Content from '../components/Content';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            content: 'home'
        }
    }

    _updateContent() {
        const newContent = this.state.content === 'home' ? 'portfolio' : 'home';
        this.setState({'content': newContent});
    }

    render() {
        return (
            <div>
                <Intro />
                <Content currentContent={this.state.content} />
                <div id="footer">
                    buttons
                </div>
            </div>
        );
    }
}

export default Home;
