// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from './components/ImageComponent';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar firstAnchor="Homepage" secondAnchor="About us" thirdAnchor="Contacts" />
      <div className='img__button'>
        <ImageComponent src="https://place.dog/600/400" alt="dog image"></ImageComponent>
        <div>
          <ButtonComponent btnName="Yellow button!" btnColor="yellow" />
          <ButtonComponent btnName="Green button!" btnColor="green" />
          <ButtonComponent btnName="Blue button!" btnColor="blue" />
        </div>
      </div>
      <Footer paraFooter="All rights reserved" mail="randomMail@rmail.com" />
    </div>
  );
}

export default App;
