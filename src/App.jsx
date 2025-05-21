
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Routers from './config/Routes'

function App() {
  console.log('App');
  return (
    <Router>
          <div className="App">
            <>
              <Header/>
              {/* <HeroSlider/> */}
              {/* <Home/> */}
              <Routers/>
              {/* <Footer /> */}
            </>
          </div>
    </Router>
    
  )
}
export default App
