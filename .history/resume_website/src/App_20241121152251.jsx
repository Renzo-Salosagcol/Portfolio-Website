import Nav from './components/Nav'
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="text-white">
      <div class="fixed h-full w-full bg-slate-950">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
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
