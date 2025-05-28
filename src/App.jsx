
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Routers from './config/Routes'
import Footer from './components/Footer/Footer'
function App() {
  console.log('App');
  return (
    <Router>
          <div className="App">
            <>
              <Header/>
              <Routers/>
              <Footer />
            </>
          </div>
    </Router>
    
  )
}
export default App
