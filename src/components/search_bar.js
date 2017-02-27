import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	updateList(){
		this.props.filterList(this.state.term);
	}

	render() {
		return (
			<div>
				Search By Recipe: <input
					value={this.state.term} 
					placeholder="begin typing here"
					onChange={event => this.setState({ term: event.target.value }, this.updateList)} />
			</div>
		)
	}

}

export default SearchBar;