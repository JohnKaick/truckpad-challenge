import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import MenuView from '../components/NavBar'
import DriverView from '../views/driver/containers/DriverContainer'
import DriverFormView from '../views/driver/containers/DriverFormContainer'
import DriverDetailView from '../views/driver/containers/DriverDetailContainer'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <MenuView />
                    <Switch>
                        <Route path="/" component={DriverView} exact />
                        <Route path="/cadastrar" component={DriverFormView} exact />
                        <Route path="/:driver_id/editar" component={DriverFormView} exact />
                        <Route path="/:driver_id/detalhes" component={DriverDetailView} exact />
                        <Redirect path='/' />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App