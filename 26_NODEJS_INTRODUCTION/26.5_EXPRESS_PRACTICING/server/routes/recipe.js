import express from 'express';

const recipeRoutes = express.Router();

let recipes = [
  {
    id:12345,
    name:'farofa de bacon',
    ingredients:['farofa', 'bacon']
  },
  {
    id:12346,
    name:'ovo mexido',
    ingredients:['ovo']
  }
];

recipeRoutes.delete('/:id', (request, response) => {
  const { id } = request.params;

  const recipeToDelete = recipes.find(recipe => recipe.id === Number(id));

  if (!recipeToDelete) {
    return response.status(400).json({ error: 'Recipe not found' });
  }

  recipes = recipes.filter(recipe => recipe.id === Number(id));

  return response.status(204).json(recipeToDelete);
});

recipeRoutes.put('/:id', (request, response) => {
  const { id } = request.params;
  const { name, ingredients } = request.body;

  const recipeToUpdate = recipes.find(recipe => recipe.id === Number(id));

  if (!recipeToUpdate) {
    return response.status(400).json({ error: 'Recipe not found' });
  }

  const updatedRecipe = {
    ...recipeToUpdate,
    name,
    ingredients
  }

  recipes = recipes.map(recipe => {
    if (recipe.id !== Number(id)) {
      return recipe;
    }

    return updatedRecipe;
  });

  return response.status(204).json(updatedRecipe);
});

export default recipeRoutes;
