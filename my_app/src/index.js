import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import functioneaxmple from './ss4/functionalExample';
import MyApp from './ss4/myapp';
import Student from './ss4/myapp';
import ReactForm from './form/ReactForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ReactForm></ReactForm>
    <Student></Student>
    <functioneaxmple></functioneaxmple>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
