import { AccessControl, Login } from '../pages'

export const routes = [
  { path: '/', element: <div />, exact: true },
  { path: '/login', element: <Login />, exact: true },
  { path: '/access_control', element: <AccessControl /> }
]
