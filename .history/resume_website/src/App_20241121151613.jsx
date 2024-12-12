import Nav from './components/Nav'
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="mb-100000">
      <nav className="fixed">
        <Nav />
      </nav>
      <main className="my-30">
        <Hero />
      </main>
    </div>
  )
}

export default App;
