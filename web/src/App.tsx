import React from 'react';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import './App.css';

import Routes from './routes'

function App() {
  return (
    <>
        <ReactNotification />
        <Routes />
    </>
  )
}

export default App