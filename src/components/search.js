import React, { Component } from 'react';

class Search extends Component {
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input id="search_box"
                        className="form-control"
                        type="text"
                        placeholder="Search for song title"
                        ref="title"
                        onChange={this.props.onChange}
                        autoFocus />
                    <input className="btn btn-primary"
                        type="button"
                        value="Search"
                        onClick={this.props.onClick} />
                </form>
            </div>
        )
    }
}

export default Search
