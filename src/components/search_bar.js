import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ' ' };
	}

	filterList(){
		
	}

	render() {
		return (
			<div>
				Find recipe: <input
					// value={this.state.term} 
					// onChange={event => this.setState({ term: event.target.value })} />
					onChange={event => console.log(event.target.value)} />
			</div>
		)
	}

}

export default SearchBar;