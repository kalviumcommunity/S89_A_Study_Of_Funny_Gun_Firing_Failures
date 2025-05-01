import React from 'react'

const AddForm = () => {
return (
    <div>
        <form>
            <label htmlFor="itemName">Item Name:</label>
            <input type="text" id="itemName" name="itemName" />

            <label htmlFor="itemQuantity">Quantity:</label>
            <input type="number" id="itemQuantity" name="itemQuantity" />

            <button type="submit">Add Item</button>
        </form>
    </div>
)
}

export default AddForm
