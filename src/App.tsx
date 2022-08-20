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
  return <h1>Services page</h1>;
}

export default App;