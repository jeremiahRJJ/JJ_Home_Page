// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div className="site">
      <header>
        <nav className="nav">
          <a className="brand" href="#/">JJ</a>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} JJ • Built with React + Vite</footer>
    </div>
  )
}

function Home() {
  return (
    <section>
      <h1>Hello, I'm JJ 👋</h1>
      <p>Second-year CSE student @ Politechnika Opolska. Welcome to my personal site!</p>
    </section>
  )
}
function About() {
  return (
    <section>
      <h1>About Me</h1>
      <p>I’m passionate about Rust OS development, AI tools, and educational systems.</p>
    </section>
  )
}
function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <ul>
        <li><strong>WeatherCLI:</strong> C++ weather app with Boost.Beast and SQLite logging.</li>
        <li><strong>Rust OS Labs:</strong> Minimal kernel bootloader experiments in Rust.</li>
      </ul>
    </section>
  )
}
function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>Email: <a href="mailto:jebasinghjeremiah@gmail.com">jebasinghjeremiah@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/jeremiahRJJ" target="_blank" rel="noreferrer">github.com/jeremiahRJJ</a></p>
    </section>
  )
}

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
