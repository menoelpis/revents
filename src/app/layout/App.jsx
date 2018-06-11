import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventForm from '../../features/event/EventForm/EventForm';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <Container className="main">
          <Route path='/' component={EventDashboard} />
          <Route path='/events' component={EventDashboard} />
          <Route path='/event/:id' component={EventDetailedPage} />
          <Route path='/people' component={PeopleDashboard} />
          <Route path='/profile/:id' component={UserDetailedPage} />
          <Route path='/settings' component={SettingsDashboard} />
          <Route path='/createEvent' component={EventForm} />
        </Container>
      </div>
    );
  }
}

export default App;
