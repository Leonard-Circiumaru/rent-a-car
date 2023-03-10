import './App.css';
//import { Content } from './components/Content/Content';
//import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from './components/Pages/HomePage';
import { ContactPage } from './components/Pages/ContactPage';
import { InvestmentsPage } from './components/Pages/InvestmentsPage';
import { AboutPage } from './components/Pages/AboutPage';
import { ServicesPage } from './components/Pages/ServicesPage';
import { RegisterPage } from './components/Pages/RegisterPage';

function App() {
  return (
      <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/services">
            <ServicesPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/about-us">
            <AboutPage />
          </Route>
          <Route path="/investments">
            <InvestmentsPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
