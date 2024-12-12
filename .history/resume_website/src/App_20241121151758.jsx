import Nav from './components/Nav'
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="">
      <nav className="fixed w-full">
        <Nav />
      </nav>
      <main className="top-30">
        <Hero />
      </main>
    </div>
  )
}

export default App;
