import React from 'react';

function Footer()
{
    return (
        <div>
        <br></br>
        <br></br>
        <footer className="text-white text-center " style={{backgroundColor:"#008374"}}>
        <div className="container p-4">
          <div className="row">
            <div className="text-center">
                  <a href="#" className="text-white">info</a>
                
                  <a href="#" className="text-white">support</a>
                <br/>
                  <a href="#!" className="text-white">Terms of use</a>
                
              <a href="#!" className="text-white">Privacy Policy</a>
            </div>
        </div>
        <div className="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}} >
          © 2023 Copyright:
          <a className="text-white" href="#!">projectkmit</a>
        </div>
        </div>
      </footer>
       
        </div>
            );
        }
export default Footer;