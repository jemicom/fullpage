import Navbar from './components/Navbar/Navbar';
import './App.css';
// node-sass react-icons
import { images } from './constants'
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from './container';
// index.js 생략 
import { useState} from 'react';

const menus = ["header", "about", "skills", "testimonial", "work", "footer"];

function App() {
  const [ item , setItem] = useState(menus[0]);
  return (
    <div className="App">
      <Navbar menus={menus} item={item} setItem={setItem }/>
      <Header menus={menus} item={item}  setItem={setItem }/>
      <About menus={menus} item={item}  setItem={setItem }/>
      <Skills menus={menus} item={item}  setItem={setItem }/>
      <Testimonial menus={menus} item={item}  setItem={setItem }/>
      <Work menus={menus} item={item}  setItem={setItem }/>
      <Footer menus={menus} item={item}  setItem={setItem }/>
    </div>
  );
}

export default App;
