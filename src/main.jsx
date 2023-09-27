/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(


  <Auth0Provider
    domain="dev-7rr1b41sj71cwxoj.us.auth0.com"
    clientId="m1JeIxVwQj93Oo05YrqRkcJ7I6wddXRF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
 
    <App />

  </Auth0Provider>

 ,
)
