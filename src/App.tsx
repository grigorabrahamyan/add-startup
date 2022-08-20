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
    id: 2,
    title: 'Works',
    link: '/works',
  },
  {
    id: 2,
    title: 'About Us',
    link: '/aboutus',
  }
]

function App() {

  return (
    <div className="app" >
      <header >
        <h1>Logo Add StartUp</h1>
        <nav>
          {
            menus.map(menu => {
              return (
                <Link key={menu.id} to={menu.link}>
                  <span>{menu.title}</span>
                </Link>
              )
            })
          }
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