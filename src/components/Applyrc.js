import React from 'react';
import logo from '../../src/logo512.png'
function Applyrc()
{
    return (
        <div>
            <img className='logo' src={logo} ></img>
            <h2>RC Application</h2>
            <form>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Owner Name</span>
        <input type="text" className="form-control" placeholder ="Enter Owner Name"aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
        <input type="text" className="form-control" placeholder="Enter your Address" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Vehicle className</span>
        <input type="text" className="form-control" placeholder="Enter Vehicle className" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Engine Number</span>
        <input type="text" className="form-control" placeholder="Enter Engine Number"aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Fuel used</span>
        <input type="text" className="form-control" placeholder= "Enter Fuel Type" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Vehicle className</span>
        <input type="text" className="form-control" placeholder = "Enter Vehicle className" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Vehicle colour</span>
        <input type="text" className="form-control" placeholder="Entery Vehicle colour" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
        </div>
        <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupFile01">Upload Aadhar</label>
        <input type="file" className="form-control" id="inputGroupFile01"></input>
        </div>
        <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupFile01">Upload Photo</label>
        <input type="file" className="form-control" id="inputGroupFile01"></input>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit" className="btn btn-primary">Submit</button>
       </div>
      </form>
        </div>
    );
}
export default Applyrc;