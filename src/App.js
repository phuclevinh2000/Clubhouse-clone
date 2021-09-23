import React from 'react';
import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';

//planlayout
function App() {
  return (
    <BrowserRouter>
    <Route exact path={[    //allow people to go to these path only
      '/',
      '/invite',
      '/get_username',
      '/allow_notification',
    ]}>
      
      <PlanLayout>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/invite" component={PhoneConfirmation} />
        <Route exact path="/code_confirm" component={CodeConfirm} />
        <Route exact path="/allow_notification" component={AllowNotification} />
      </Switch>
      </PlanLayout>
      
    </Route>
    </BrowserRouter>
   
  );
}

export default App;
