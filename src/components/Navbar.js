import React from 'react';

function Navbar()
{
    return (
        
        <nav className="navbar navbar-expand-lg rounded" style={{backgroundColor:"#008374"}}>
    <div className="container p-4">
      <a className="navbar-brand fs-4 text-white" href="#">Home</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                RC
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item text-success" href='/Applyrc'>New Vehicle Registration</a></li>
                <li><a className="dropdown-item text-success" href='/Rclist'>List of RCs</a></li>
              </ul>
          </li>
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                License
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item text-success" href='/Applylic'>New License Registration</a></li>
                <li><a className="dropdown-item text-success" href='/Liclist'>List of Licenses</a></li>
              </ul>
          </li>
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Permits
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item text-success" href="/Applypermit">New Permit Registration</a></li>
                <li><a className="dropdown-item text-success" href="/Perlist">List of Permits</a></li>
              </ul>
          </li>
        </ul>
      </div>
    </div>
    <div className="collapse navbar-collapse fs-5 text-white" id="navbarRightAlignExample">
        
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link text-white">Logout  </a>
          </li>
        </ul>
      </div>
  </nav>
  );
}
export default Navbar;
