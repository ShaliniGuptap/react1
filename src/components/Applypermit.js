import React from 'react';

function Applypermit()
{
    return (
        <div>
            <br></br>
            <br></br>
            <h2>Permit Application</h2>
            <form>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Owner Name</span>
        <input type="text" className="form-control" placeholder="Enter Owner Name"aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">RC no.</span>
        <input type="text" className="form-control" placeholder="Enter your RC number" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
        </div>
        <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">From Address</label>
        <select className="form-select" id="validationCustom04" required>
          <option value disabled="">Choose...</option>
          <option>...</option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">
          Please select a valid address.
        </div>
        </div>
        <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">TO address</label>
        <select className="form-select" id="validationCustom04" required>
          <option value disabled ="">Choose...</option>
          <option>...</option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">
          Please select a valid address.
        </div>
        </div>
        <br></br>
        <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupFile01">Upload Aadhar</label>
        <input type="file" className="form-control" id="inputGroupFile01"></input>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit" className="btn btn-primary">Submit</button>
       </div>
      </form>
        </div>
    );
}
export default Applypermit;