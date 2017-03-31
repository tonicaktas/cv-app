// Libs
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import $ from 'jquery'


// CSS
import './css/style.css';

// Routes
import routes from './router';



// Render
render(
  routes,
  document.getElementById('root')
);
