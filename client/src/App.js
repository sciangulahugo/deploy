// Definimos nuestras herramientas.
import { Route, Switch } from 'react-router-dom';
import Nav from './component/Nav/Nav.jsx';
import LandingPage from './component/LangingPage/LangingPage.jsx';
import Home from './component/Home/Home.jsx';
import Detail from './component/Detail/Detail.jsx';
import Form from './component/Form/Form.jsx';
import PageNotFound from './component/PageNotFound/PageNotFound.jsx';
import './App.css';
import './Normalize.css';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route exact path="/home">
                    <Nav />
                    <Home />
                </Route>
                <Route exact path="/home/:id">
                    <Nav />
                    <Detail />
                </Route>
                <Route exact path="/newbreed">
                    <Nav />
                    <Form />
                </Route>
                <Route path="/*">
                    <PageNotFound />
                </Route>
            </Switch>
        </>
    );
}

export default App;
