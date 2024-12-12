import Nav from './components/Nav'
import Hero from "./components/Hero";
import { Button } from "@/components/ui/button"

const App = () => {
  return (
    <div className="text-white">
      <div class="fixed h-full w-full bg-blue"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[url(&#x27;/noise.png&#x27;)] bg-[size:300px_300px] bg-left-top"></div>
      </div>
      <nav className="fixed block w-full h-20 top-0">
        <Nav />
      </nav> 
      <main className="mt-20">
        <Hero />
        <Button />
      </main>
      <footer>
        
      </footer>
    </div>
  )
}

export default App;
