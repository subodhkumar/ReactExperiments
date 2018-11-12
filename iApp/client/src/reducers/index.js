import { CombineReducers, combineReducers } from 'redux';

import SalesReducer from './sales-reducer';
import ActiveEstimate from './active-estimate';
import ActiveSales from './active-sales';
import TestFetch from './fetch-test-reducer';
import SignUp from './signup-reducer';
import Login from './login-reducer';
import AllUsers from './all-users-reducer';
import AllRoles from './all-roles-reducer';

const allReducers = combineReducers({
  sales: SalesReducer,
  activeSales: ActiveSales,
  activeEstimate: ActiveEstimate,
  testFetch: TestFetch,
  signUpData: SignUp,
  loginData: Login,
  allUsers: AllUsers,
  allRoles: AllRoles,
});

export default allReducers;
