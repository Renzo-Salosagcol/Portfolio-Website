import Nav from './components/Nav'
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="top-0">
      {/* <nav className="fixed">
        <Nav />
      </nav> */}
      <main className="top-30">
        <Hero />
      </main>
    </div>
  )
}

export default App;
