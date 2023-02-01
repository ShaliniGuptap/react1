import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet';
import Navbar from './components/Navbar';
import Applyrc from './components/Applyrc';
import Navbarii from './components/Navbarii'
import Applypermit from './components/Applypermit';
import Applylic from './components/Applylic';
import Rclist from './components/Rclist';
import Liclist from './components/Liclist';
import Perlist from './components/Perlist';
import Pendingrc from './components/Pendingrc';
import Approvedrc from './components/Approvedrc';
import Rejectedrc from './components/Rejectedrc';
import Pendinglic from './components/Pendinglic';
import Approvedlic from './components/Approvedlic';
import Rejectedlic from './components/Rejectedlic';
import Pendingper from './components/Pendingper';
import Approvedper from './components/Approvedper'
import Rejectedper from './components/Rejectedper';
import Report from './components/Report';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navbarii/>
      <Routes>
        <Route path='/Applyrc' element={<Applyrc/>}></Route>
        <Route path='/Rclist' element={<Rclist/>}></Route>
        <Route path='/Liclist' element={<Liclist/>}></Route>
        <Route path='/Applylic' element={<Applylic/>}></Route>
        <Route path='/Applypermit' element={<Applypermit/>}></Route>
        <Route path='/Perlist' element={<Perlist/>}></Route>
        <Route path='/Pendingrc' element={<Pendingrc/>}></Route>
        <Route path='/Approvedrc' element={<Approvedrc/>}></Route>
        <Route path='/Rejectedrc' element={<Rejectedrc/>}></Route>
        <Route path='/Pendinglic' element={<Pendinglic/>}></Route>
        <Route path='/Approvedlic' element={<Approvedlic/>}></Route>
        <Route path='/Rejectedlic' element={<Rejectedlic/>}></Route>
        <Route path='/Pendingper' element={<Pendingper/>}></Route>
        <Route path='/Approvedper' element={<Approvedper/>}></Route>
        <Route path='/Rejectedper' element={<Rejectedper/>}></Route>
        <Route path='/Report' element={<Report/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// //import Greet from './components/Greet';
// import AboutUs from './components/AboutUs';
// function App() {
//   return (
//     <div className="App">
//       <AboutUs />
//     </div>
//   );
// }

// export default App;

