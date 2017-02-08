import SC from 'soundcloud';
import React, { Component } from 'react';

class Results extends Component {

    play(e) {
        let track_id = e.target.value
        SC.stream(`/tracks/${track_id}`).then(function(player){
            /* reverse the protocols array to use HTML5 first
                and fallback on flash for old browsers */
            player.options.protocols = ['http', 'rtmp']
            player.play();
        });
    }

    render() {
        return (
            <ol className="search_results">
                {this.props.items.map(item => (
                    <li key={item.id} id={item.id} className="search_results__item">
                        <img className="results_item__img"
                            src={item.artwork_url}
                            alt={item.title} />
                        <div>
                            <h6 className="u-trim">{item.title}</h6>
                            <small className="text-muted u-display-block">
                                {item.user.username}
                            </small>
                            <small className="text-muted u-display-block">
                                Duration: {item.duration}
                            </small>
                            <button type="button"
                                className="btn btn-secondary"
                                value={item.id}
                                onClick={this.play.bind(this)}>Play</button>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default Results
