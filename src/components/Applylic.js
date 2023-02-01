import React from 'react';

function Applylic()
{
    return (
        <div>
            <br></br>
            <br></br>
            <h2>License Application</h2>
            <form>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
        <input type="text" className="form-control" placeholder=" Enter name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Enter DOB</span>
        <input type="text" className="form-control" placeholder="Enter your Date of Birth" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Relationship</span>
        <input type="text" className="form-control" placeholder="Enter your relationship status" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
        <input type="text" className="form-control" placeholder="Enter your Address" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Category</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">Mandal</label>
        <select className="form-select" id="validationCustom04" required>
          <option value disabled ="">Choose...</option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">
          Please select a valid mandal.
        </div>
        </div>
        <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">District</label>
        <select className="form-select" id="validationCustom04" required>
          <option value disabled="">Choose...</option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">
          Please select a valid district.
        </div>
        </div>
        <br/>
        <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupFile01">Upload Aadhar</label>
        <input type="file" className="form-control" id="inputGroupFile01"/>
        </div>
        <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupFile01">Upload Photo</label>
        <input type="file" className="form-control" id="inputGroupFile01"/>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
           <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>   
    );
}
export default Applylic;