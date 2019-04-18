import React, { Component } from 'react';
import projects from '../projects';
import { ThemeProvider } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Content from '../components/Content';
import Header from '../components/Header';
import { theme, GlobalContainer } from '../utilities/styles';

class Home extends Component {
    state = {
        content: 'home',
        projects: projects
    }

    _setHome = (e) => {
        this.setState({'content': 'home'});
    }

    _setPortfolio = (e) => {
        this.setState({'content': 'portfolio'})
    }

    _setMode = () => {
        const nextMode = this.state.mode === 'dark' ? 'light' : 'dark';
        this.setState({'mode': nextMode})
    }

    _setFlipped = (title) => {
        let projects = this.state.projects.slice();
        let flippedIndex;

        projects.forEach((proj, ind) => {
            if (proj.title === title) {
                flippedIndex = ind;
            }
        });

        projects[flippedIndex].flipped = !projects[flippedIndex].flipped;
        this.setState({'projects': projects});
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <Header />
                    <GlobalContainer />    
                    <CSSTransition 
                        in={true}
                        appear={true}
                        timeout={2000}
                        classNames="fade"
                    >
                        <Content
                            currentContent={this.state.content}
                            mode={this.state.mode}
                            projects={this.state.projects}
                            setFlipped={this._setFlipped}
                            setPortfolio={this._setPortfolio}
                            setHome={this._setHome}
                        />
                    </CSSTransition>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

export default Home;
