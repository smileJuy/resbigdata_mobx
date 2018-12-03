import { renderRoutes } from 'react-router-config'
import React from 'react'
import "antd/dist/antd.css";
import {BrowserRouter,Route,Link} from 'react-router-dom'
import asyncComponent from '../components/asyncComponent'
const WrappedNormalLoginForm=asyncComponent(()=>(import('../container/login')))
const Index=asyncComponent(()=>(import('../container/index')))
const Root = ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
)

const routes = [
  { component: Root,
    routes: [
      { path: '/',
        exact: true,
        component: WrappedNormalLoginForm
      },
      { path: '/index',
        component: Index
      }
    ]
  }
]

const Main=()=>{
	  return (
	  	<BrowserRouter>
		    {/* kick it all off with the root route */}
		    {renderRoutes(routes)}
		  </BrowserRouter>
	  )
}

export default Main