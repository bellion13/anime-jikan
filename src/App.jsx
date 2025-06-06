
import { BrowserRouter} from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Routers from './config/Routes'
import Footer from './components/Footer/Footer'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
function App() {
  // console.log('App');
  return (
    <BrowserRouter>
      {/* <Router> */}
        <div className="App">
          <>
            <Header />
            <Routers />
            <Footer />
            <ScrollToTopButton />
          </>
        </div>
      {/* </Router> */}
    </BrowserRouter>

  )
}
export default App
