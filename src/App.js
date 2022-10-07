import 'remixicon/fonts/remixicon.css'
import 'bulma/css/bulma.min.css'
import Router from './router'

// CSS Page
import './App.css';
import './style/home.css'
import './style/about.css'
import './style/portfolio.css'
import './style/artikel.css'

// Swiper
import "./style/swiper.css";
import 'swiper/css';
import "./style/swiper.css";

// import 'semantic-ui-css/semantic.min.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'

function App() {
  return (
    <Router basename="/mortara"/>
  );
}

export default App;
