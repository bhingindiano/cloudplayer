import React, { Component } from 'react';

class Results extends Component {
    render() {
        return (
            <ol className="search_results">
                {this.props.items.map(item => (
                    <li key={item.id} id={item.id} className="search_results__item">
                        <img className="results_item__img"
                            src={item.artwork_url}
                            alt={item.title} />
                        {item.title} Duration: {item.duration}
                    </li>
                ))}
            </ol>
        )
    }
}

export default Results
