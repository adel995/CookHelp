import React, { useState, useEffect } from 'react'
import RecipeList from './RecipeList'
import '../Styles/app.css'
import { v4 as uuidv4 } from 'uuid'
import RecipeEdit from './RecipeEdit'
export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookHelp.recipes'

export default function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON !== null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])


  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }


  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'instruc.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1gr' }
      ]
    }
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      <RecipeEdit />
    </RecipeContext.Provider>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: ' 1. Put salt on chicken.\n2. Put chicken in oven.\n3. Eat chicken.',
    ingredients: [
      {
        id: 1,
        name: 'chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'salt',
        amount: '2gr'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '2:30',
    instructions: ' 1. Put pepper on pork.\n2. Put pork in oven.\n3. Eat pork.',
    ingredients: [
      {
        id: 1,
        name: 'pork',
        amount: '3 pounds'
      },
      {
        id: 2,
        name: 'pepper',
        amount: '4gr'
      }
    ]
  }
]