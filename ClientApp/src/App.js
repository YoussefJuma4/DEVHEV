import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CodeEditor from './components/CodeEditor';
import RoomSelector from './components/RoomSelector';
import chatfrontend from './chatfrontend';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
        <Route path='/something' component={RoomSelector} />
        <Route path='/somethingelse' component={chatfrontend} />
      </Layout>
    );
  }
}
