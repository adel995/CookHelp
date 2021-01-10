import React from 'react'

export default function RecipeEdit() {
    return (
        <div className='recipe-edit'>
            <button>&times;</button>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name'></input>
            </div>
            <div>
                <label htmlFor='cookTime'>Cook Time</label>
                <input type='text' name='cookTime' id='cookTime'></input>
            </div>
            <div>
                <label htmlFor='servings'>Servings</label>
                <input type='number' name='servings' id='servings' min='1'></input>
            </div>
            <div>
                <label htmlFor='instructions'>Instructions</label>
                <textarea name='instructions' id='instructions'></textarea>
            </div>
        </div>
    )
}
