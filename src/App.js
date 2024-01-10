//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppBar from './components/AppBar.js';
import Banner from './components/Banner.js';
import Menu from './components/Menu.js';
import PickoftheWeek from './components/PickoftheWeek.js';
import Comments from './components/Comments.js';


function App() {
  return (
    <>
   <AppBar />
   <Banner />
   <Menu />
   <PickoftheWeek />
   <Comments />
   <div className="text-center my-3 text-success small">
   Copyright © 2023-24 
   </div>
    </>
  );
}

export default App;
