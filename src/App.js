import React from 'react';
import './App.css';
import Home from './pages/Home/Home'
import Register from './pages/Auth/Register'
import LogIn from './pages/Auth/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './pages/Project/Project';
import ProjectComponent from './components/Project/projectComponent';
import Project2Component from './components/Project/project2Component';
import Project3Component from './components/Project/demo1Component';
import Project4Component from './components/Project/demo2Component';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import AuthRequired from './pages/Auth/AuthRequired';
import Profile from './pages/Auth/Profile';
import VerifyMail from './pages/Auth/VerifyMail';

const publicRoutes = [
  {
      path: "/Login",
      exact: true,
      component: LogIn
  },
  {
      path: "/",
      exact: true,
      component: Home
  },
  {
      path: "/Register",
      exact: true,
      component: Register
  },
];

const authRequiredRoutes = [
  {
      path: "/Projects",
      exact: true,
      component: <ProjectComponent/>
  },
  {
    path: "/Application",
    exact: true,
    component: <Project2Component/>
  },
  {
    path: "/Demo1",
    exact: true,
    component: <Project3Component/>
  },
  {
    path: "/Demo2",
    exact: true,
    component: <Project4Component/>
  },
  {
    path: "/Profile",
    exact: true,
    component: <Profile/>
  },
  {
    path: "/Verify",
    exact: true,
    component: <VerifyMail/>
  },
]

const pathsForLayout = routes => routes.map(route => route.path)

function App(props) {


    return (
      <div >
        
            <HashRouter basename ='/'>
                <Switch>
                    <Route exact path={pathsForLayout(publicRoutes)}>
                        <Switch>
                            {
                                publicRoutes.map((route,index) => (
                                    <Route
                                        key={index}
                                        exact={route.exact}
                                        path={route.path}
                                        component={route.component}
                                    />
                                ))
                            }
                        </Switch>
                    </Route>
                    <Route exact path={pathsForLayout(authRequiredRoutes)}>
                        <Switch>
                            {
                                authRequiredRoutes.map((route,index) => (
                                    <Route
                                        key={index}
                                        exact={route.exact}
                                        path={route.path}
                                        render={() => (
                                             <AuthRequired 
                                                 {...props}
                                                 orComponent={route.component}
                                             />
                                        )}
                                    />
                                ))
                            }
                        </Switch>
                    </Route>
                    {/* <Route component={NotFound} /> Your custom 404 page */}
               </Switch>
           </HashRouter>
        </div>
    )
  }

export default App
