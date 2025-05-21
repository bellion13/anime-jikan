import { Route , Routes} from 'react-router-dom';
import Home from '../pages/Home/Home'; 
// import Catalog from '../pages/Catalog/Catalog';
// import Detail from '../pages/Detail/Detail';

const Routers = () => {
  return (
    <Routes>
        {/* <Route path="/:category/search/:keyword" component={Catalog} /> */}
        {/* <Route path="/:category/:id" component={Detail} />
        <Route path="/:category" component={Catalog} /> */}
        <Route path="/"  element={<Home />} />
    </Routes>
  )
}
export default Routers;
