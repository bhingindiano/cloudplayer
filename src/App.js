import SC from 'soundcloud';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Search from './components/search';
import Results from './components/results';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            items: []
        }
    }

    handleSearchChange(e) {
        this.setState({title: e.target.value})
    }

    search() {
        SC.get('/tracks', {
            q: this.state.title
        }).then((tracks) => {
            this.setState({items: tracks});
        });
    }

    render() {
        return (
            <div className="App">
                <Navbar />

                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">Play the music you love</h1>
                        <p className="lead">Search for title of the song available in soundcloud and play it here.</p>

                        <Search onClick={this.search.bind(this)}
                            onChange={this.handleSearchChange.bind(this)}/>
                    </div>
                </div>

                <div className="container">
                    <Results items={this.state.items}/>
                </div>

            </div>
        );
    }
}

export default App;
