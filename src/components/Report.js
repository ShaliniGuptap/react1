import React from 'react';

function Report()
{
    return (
        <div>
        <br></br>
        <br></br>
        <h2>Report</h2>
        <br/>
        <div>
        <li className="col-md-6">
      <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Select</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">RC</a></li>
        <li><a className="dropdown-item" href="#">License</a></li>
        <li><a className="dropdown-item" href="#">Permit</a></li>
      </ul>
  </li>
  </div>
  <br/>
    <div className="col-md-6">
      <label htmlFor="date">From:</label>
      <input type="date" id="date" name="birthday"/>
      <label htmlFor="date">To:</label>
      <input type="date" id="date" name="birthday"/>
      </div>
      <br/>
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <br/>
      <br/>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">APPLICATION NUMBER</th>
            <th scope="col"> DETAILS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"> </th>
            <td> </td>
          </tr>
          <tr>
            <th scope="row"> </th>
            <td > </td>
          </tr>
        </tbody>
      </table>
        </div>
            );
        }
export default Report;