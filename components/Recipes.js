import { useState } from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

function filterRecipes(arr, searchValue) {
  return arr.filter((recipe) => recipe.name.toLowerCase().includes(searchValue))
}

export default function Recipes(props) {
  const [searchValue, setSearchValue] = useState('')
  
  function onSearchChange(searchValue) {
    setSearchValue(searchValue)
  }

  return (
    <div>
      <RecipeSearch searchValue={searchValue} onSearchChange={onSearchChange} />
      <hr className='mt-4' />
      <ul className='markdown my-4'>
        {filterRecipes(props.recipes, searchValue.toLowerCase()).map((recipe, i) => (
          <Recipe key={i} recipe={recipe} />
        ))}
      </ul>
    </div>
  )
}