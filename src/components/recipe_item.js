import React, { Component } from 'react';

const RecipeItem = ({recipe}) => {
	const recipeName = recipe.recipeName;

	return (
		<li className="list-group-item">
			<div>
				{ recipeName }
			</div>
		</li>
	)

};

export default RecipeItem;