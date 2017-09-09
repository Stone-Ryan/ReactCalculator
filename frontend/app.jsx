import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Calcuator from './calculator';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Calcuator />, document.getElementById('main'));
});
