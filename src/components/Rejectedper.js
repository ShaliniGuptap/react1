import React from 'react';

function Rejectedper()
{
    return (
        <div>
        <br></br>
        <br></br>
        <h2>Rejected Permits</h2>
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
export default Rejectedper;