import SC from 'soundcloud';
import React, { Component } from 'react';
import prettyMs from 'pretty-ms';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: null
        }
    }

    play(track_id) {
        SC.stream(`/tracks/${track_id}`).then((player) => {
            /* reverse the protocols array to use HTML5 first
                and fallback on flash for old browsers */
            player.options.protocols = ['http', 'rtmp']
            player.play();

            this.setState({player: player})
        });
    }

    pause() {
        if (this.state.player) {
            this.state.player.pause();
        }
    }

    render() {
        return (
            <ol className="search_results">
                {this.props.items.map(item => (
                    <li key={item.id} className="search_results__item">
                        <img className="results_item__img"
                            src={item.artwork_url}
                            alt={item.title} />
                        <div>
                            <h6 className="u-trim">{item.title}</h6>
                            <small className="text-muted u-display-block">
                                {item.user.username}
                            </small>
                            <small className="text-muted u-display-block">
                                Duration: {prettyMs(item.duration)}
                            </small>
                            <button type="button"
                                className="btn btn-secondary btn-sm"
                                onClick={() => this.play(item.id)}>
                                <i className="fa fa-play"></i>
                            </button>
                            <button type="button"
                                className="btn btn-secondary btn-sm"
                                onClick={() => this.pause(item.id)}>
                                <i className="fa fa-pause"></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default Results
