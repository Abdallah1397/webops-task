import {BrowserRouter as Router,Route} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './store/reducers';
import rootSaga from '../src/store/sagas';
import Images from './component/images/images';
import Categories from './component/categories/categories'
import Navlink from './component/navlink/navlink';
import axios from 'axios';
const sagaMiddleware =createSagaMiddleware();
const store=createStore(reducers,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
const result=axios.get('http://localhost:3000/images');


const App=()=>(
  
    <Provider store={store}>
    <div className="App">
      <Router>
        <Navlink />
        <Route exact path="/" component={Images} />
        <Route exact path="/photo/:id" component={Images} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/category/:id" component={Categories} />
      </Router>
    </div>
    </Provider>
  
);

export default App;
