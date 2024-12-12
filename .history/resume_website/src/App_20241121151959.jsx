import Nav from './components/Nav'
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="text-white">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
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
