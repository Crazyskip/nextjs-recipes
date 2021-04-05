import React from 'react'
import marked from 'marked'

export default function Recipe(props) {
  const recipe = props.recipe
  return (
    <li className='my-4' key={recipe.id}>
      <h3 className='text-3xl text-blue-500 font-bold'>{recipe.name}</h3>
      <h4 className='text-xl mt-2 mb-2 font-bold'>Ingredients</h4>
      <div className='marked' dangerouslySetInnerHTML={{
        __html: marked(recipe.ingredients),
        }}
      />
      <h4 className='text-xl mt-4 mb-2 font-bold'>Method</h4>
      <div className='marked' dangerouslySetInnerHTML={{
        __html: marked(recipe.method),
        }}
      />
      <hr className='mt-4' />
    </li>
  )
}