import React from 'react'

const AddTask = ({handleChange, handleSubmit}) => {
    return (
        <div className="taskForm">
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="title" >Title</label>
                    <input type="text" id="title" name="title" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="decrption" >Decrption</label>
                    <textarea type="text" rows={4} id="decrption" name="decrption" onChange={handleChange} />
                </div>
                <button type="submit">ADD TASK</button>
            </form>
        </div>
    )
}

export default AddTask
