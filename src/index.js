import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/scss/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeTemplate from './layouts/HomeTemplate';
import AdminTemplate from './layouts/AdminTemplate';
import FormTemplate from './layouts/FormTemplate';
import Login from './pages/Auth/Login';
import Home from './pages/Home';
import Profile from './pages/User/Profile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
           {/* <Provider store={store}> */}
              <Routes>
                 <Route
                    path='/'
                    element={<App />}
                 >
                    <Route element={<HomeTemplate />}>
                       <Route
                          index
                          path='/'
                          element={<Home />}
                       />
                       <Route
                          index
                          path='/profile'
                          element={<Profile />}
                       />
                       <Route
                          path='/*'
                          element={<Navigate to={'/'} />}
                       />
                    </Route>
                    <Route element={<FormTemplate />}>
                       <Route
                          path='/login'
                          element={<Login />}
                          lazy={() => import('./pages/Auth/Login')}
                       />
                    </Route>
                    <Route element={<AdminTemplate />}>
                      
                      
                      
                    </Route>
                 </Route>
              </Routes>
           {/* </Provider> */}
        
    
  </BrowserRouter>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
