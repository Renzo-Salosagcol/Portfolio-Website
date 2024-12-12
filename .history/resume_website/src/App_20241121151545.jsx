import Nav from './components/Nav'
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="mb-100000">
      <nav>
        <Nav />
      </nav>
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App;
