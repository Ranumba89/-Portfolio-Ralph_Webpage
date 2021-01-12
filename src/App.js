import './App.css';
import './components/style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/home';
import Navb from './components/navb';
import Portfolio from './components/portfolio'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/contact';

function App() {
    return <div className="App">

      <Router>
        <Navb/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/Portfolio" component={Analyze} />
          <Route exact path="/Contact" component={Listen} />
        </div>
        {/* <Footer />  */}
      </Router>
</div>
  }

export default App;
