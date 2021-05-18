import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import './global.css';

import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');
ReactDOM.render(
<BadgeNew
firstName="Carlos" 
lastName="Mendoza"
email="kirit0@gmail.com"
profession="Fontend Engineer"/>, container);

