
import React from 'react'

const AddFirm = () => {
  return (
        <div className="firmSection">
            <form className="tableForm">
            <h2>Add Firm</h2>
                <label >Firm Name</label>
                <input type="text" />
                <label >Area</label>
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
            <label >Offer</label>
            <input type="text" />
      <div className="checkInp">
        <label>Region</label>
            <div className="inputContainer">
            <div className="reegboxContainer">
              <label >North Indian</label>
              <input type="checkbox" value="Veg" />              
            </div>
            <div className="reegboxContainer">
              <label >South Indian</label>
              <input type="checkbox" value="Non-Veg" />
            </div>
            <div className="reegboxContainer">
              <label >Chenise</label>
              <input type="checkbox" value="Non-Veg" />
            </div>
            <div className="reegboxContainer">
              <label >Bakery</label>
              <input type="checkbox" value="Non-Veg" />
            </div>
            </div>
            </div>
                
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

export default AddFirm


