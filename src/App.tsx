import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./components/HomePage";

const menus = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    
  },
  {
    id: 2,
    title: 'Services',
    link: '/services',
  },
  {
    id: 3,
    title: 'Works',
    link: '/works',
  },
  {
    id: 4,
    title: 'About Us',
    link: '/aboutus',
  },
  // {
  //   id: 5,
  //   title: 'Contact Us',
  //   link: '/contactus',
  // }
]

function App() {

  return (
    <div className="container" >
      
      <header >
      
        <nav className="nav" >
        <h1 className="header">StartUp</h1>
        
          {
            menus.map(menu => {
              return (
                
                <Link className="link1"  key={menu.id} to={menu.link}>
                  <span>{menu.title}</span>
                </Link>
              )
            })
          }
          <Link className="link2" to="/contactus">Contact Us</Link>
          
        </nav>
        </header>
      
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </div>
  );
}

function Services() {
  return <h1>Aram should create this website becouse Gevorg will be here tommorow</h1>;
}

export default App;