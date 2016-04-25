import React, { Component } from 'react';

// Parent Component
class GroceryList extends Component
{
	render() {
		return (
			<ul>
				<ListItem quantity="1">Bread</ListItem>
				<ListItem quantity="6">Eggs</ListItem>
				<ListItem quantity="2">Milk</ListItem>
			</ul>
		);
	}
}

// Child Component
class ListItem extends Component 
{
	render() {
		return (
			<li>
				{this.props.quantity}x {this.props.children}
			</li>
		);
	}
}

React.render(<GroceryList />, document.getElementById("root"));