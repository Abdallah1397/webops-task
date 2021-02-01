import {BrowserRouter as Router,Route} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './store/reducers';
import rootSaga from '../src/store/sagas';
import Images from './component/images/images';
import Categories from './component/categories/categories'
import Navlink from './component/Navbar/navbar';
import ImageDetails from './component/images/imageDetail'
import CategoriesDetails from './component/categories/categoriesDetails';
import Gallery from './component/Gallery/gallery'
import Footer from './component/footer/footer'
const sagaMiddleware =createSagaMiddleware();
const store=createStore(reducers,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);


const App=()=>(
  
    <Provider store={store}>
    <div className="App">

      <Router>
        <Navlink />
        <Route exact path="/" component={Images} />
        <Route exact path="/photo/:id" component={ImageDetails} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/category/:id" component={CategoriesDetails} />
        <Route exact path="/gallery" component={Gallery}/>
      </Router>
      <Footer />

    </div>
    </Provider>
  
);

export default App;
