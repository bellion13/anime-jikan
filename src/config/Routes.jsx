import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
// import Catalog from '../pages/Catalog/Catalog';
import Detail from '../pages/Detail/Detail';

const Routers = () => {
  return (

    // <BrowserRouter>
      <Routes >
        {/* <Route path="/:category/search/:keyword" component={Catalog} /> */}
        {/* <Route path="/:category/:id" component={Detail} />
        <Route path="/:category" component={Catalog} /> */}
        <Route path="/anime/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>

    // </BrowserRouter>
  )
}
export default Routers;
