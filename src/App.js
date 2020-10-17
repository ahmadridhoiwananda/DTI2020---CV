import React from 'react';
import Header from './header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './config/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route) => {
            if (route.isPublic) {
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  key={route.path}
                />
              );
            }
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
