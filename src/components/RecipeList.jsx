import React from 'react';
import RecipeCard from './RecipeCard';

// RecipeList receives the recipes array via props and renders individual cards
function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        // Passing individual recipe object down to RecipeCard via props
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;