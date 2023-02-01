import React from 'react';

function Pendinglic()
{
    return (
        <div>
        <br></br>
        <br></br>
        <h2>Pending Licenses</h2>
        <table className="table">
    <thead>
      <tr>
        <th scope="col">S.No</th>
        <th scope="col">Application NO.</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">More Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>XXXXX1</td>
        <td>NNNN</td>
        <td>AA</td>
        <td>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            view details
          </button>
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Details</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>NNN</td>
                  </tr>
                  <tr>
                    <th scope="row">Date of birth</th>
                    <td>DD/MM/YYYY</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>xxxxx</td>
                  </tr>
                  <tr>
                  <th scope="row">relationship</th>
                  <td>xx</td>
                </tr>
                <tr>
                <th scope="row">Aadhar no.</th>
                <td>xxxxx</td>
                 </tr>
                 <tr>
                 <th scope="row">Vehicle className</th>
                 <td>xxxxx</td>
                </tr>
                <tr>
                <th scope="row">Category.</th>
                <td>xxxxx</td>
                </tr>
                <tr>
                <th scope="row">Mandal,district</th>
                <td>xx,xxx</td>
                </tr>
                </tbody>
                </table>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-primary">Approve</button>
                <button type="button" className="btn btn-primary">Reject</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div></td>
      </tr>
    </tbody>
  </table>
        </div>
            );
        }
export default Pendinglic;