import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DoctorPage from './pages/DoctorPage';
import PatientPage from './pages/PatientPage';
import AppointmentPage from './pages/AppointmentPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doctors: [],
      patients: [],
      appointments: []
    };
  }

  componentDidMount() {
    this.getDoctors();
    this.getPatients();
    this.getAppointments();
  }

  async getDoctors() {
    try {
      const response = await axios.get('http://localhost:5000/api/doctors');
      this.setState({ doctors: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  async getPatients() {
    try {
      const response = await axios.get('http://localhost:5000/api/patients');
      this.setState({ patients: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  async getAppointments() {
    try {
      const response = await axios.get('http://localhost:5000/api/appointments');
      this.setState({ appointments: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
        <Router>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" render={(props) => <HomePage {...props} appointments={this.state.appointments} />} />
              <Route path="/doctors" render={(props) => <DoctorPage {...props} doctors={this.state.doctors} />} />
              <Route path="/patients" render={(props) => <PatientPage {...props} patients={this.state.patients} />} />
              <Route path="/appointments" render={(props) => <AppointmentPage {...props} appointments={this.state.appointments} />} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;