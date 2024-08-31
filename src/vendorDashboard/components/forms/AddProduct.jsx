import React from 'react'

const AddProduct = () => {
  return (
    <div className="firmSection">
            <form className="tableForm">
            <h2>Add Product</h2>
                <label >Product Name</label>
                <input type="text" />
                <label >Price</label>
                <input type="text" />
        <div className="checkInp">
        <label>Category</label>
            <div className="inputContainer">
            <div className="checkboxContainer">
              <label >Veg</label>
              <input type="checkbox" value="Veg" />              
            </div>
            <div className="checkboxContainer">
              <label >Non-Veg</label>
              <input type="checkbox" value="Non-Veg" />
            </div>
            </div>
            </div> 

      <div className="checkInp">
        <label>Bestseller</label>
            <div className="inputContainer">
            <div className="checkboxContainer">
              <label >Yes</label>
              <input type="checkbox" value="Yes" />              
            </div>
            <div className="checkboxContainer">
              <label >No</label>
              <input type="checkbox" value="No" />
            </div>
            </div>
            </div>
                



                <label >Description</label>
                <input type="text" />
                <label >Firm Iamge</label>
                <input type="file" />
                <br />
             <div className="btnSumbit">
        <button>Sumbit</button>
    </div>
            </form>
        </div>
  )
}

export default AddProduct