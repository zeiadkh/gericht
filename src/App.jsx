import {Navbar, Hero, About, Menu, ChefsWord, Video, Awards, Gallery, Find, NewsLetter, Footer} from "./containers/"
import './index.css'
import './app.css'
const App = () => {
  return (
    <>
      <div className="header">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Menu />
      <ChefsWord />
      <Video />
      <Awards />
      <Gallery />
      <Find />
      <div className="bg-primary">
        <NewsLetter />
        <Footer />
      </div>
    </>
    
  )
}

export default App