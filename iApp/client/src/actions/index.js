import moment from 'moment';
import { ActionTypes } from './action-types';
import fetch from 'cross-fetch';
import { isMoment } from 'moment';

const bcrypt = require('bcryptjs');

export const selectSales = sales => {
  console.log('ACTION | SELECT_SALES |' + sales.bid_number);
  return {
    type: ActionTypes.SELECT_SALES,
    payload: sales,
  };
};

export const selectEstimate = estimate => {
  //console.log('ACTION | SELECT_ESTIMATE |' + estimate.bid_number);
  return {
    type: ActionTypes.SELECT_ESTIMATE,
    payload: estimate,
  };
};

export const addSales = () => {
  const newSales = {};
  console.log('ACTION | ADD_SALES ');
  return {
    type: ActionTypes.ADD_SALES,
    payload: newSales,
  };
};

export const publishSales = () => {
  console.log('ACTION | ADD_SALES ');
  return {
    type: ActionTypes.SALES_PUBLISH,
    payload: null,
  };
};

export const saveSales = () => {
  console.log('ACTION | ADD_SALES ');
  return {
    type: ActionTypes.SALES_SAVE,
    payload: null,
  };
};

export const cancelSales = () => {
  console.log('ACTION | ADD_SALES ');
  return {
    type: ActionTypes.SALES_CANCEL,
    payload: null,
  };
};

export const requestSales = () => {
  console.log('ACTION | REQUEST_SALES');
  return {
    type: ActionTypes.REQUEST_SALES,
    payload: null,
  };
};

export const recieveSales = sales => {
  //console.log('ACTION | RECEIVE_SALES | ' + JSON.stringify(sales));
  return {
    type: ActionTypes.RECEIVE_SALES,
    payload: sales,
  };
};

export const loginBegin = () => {
  console.log('ACTION | LOG_IN_BEGIN | ');
  return {
    type: ActionTypes.LOG_IN_BEGIN,
    payload: null,
  };
};

export const loginEnd = data => {
  console.log('ACTION | LOG_IN_END | ' + JSON.stringify(data));
  return {
    type: ActionTypes.LOG_IN_END,
    payload: data,
  };
};
export const loginFail = data => {
  console.log('ACTION | LOG_IN_FAIL | ');
  return {
    type: ActionTypes.LOG_IN_FAIL,
    payload: data,
  };
};

export const logOutBegin = data => {
  console.log('ACTION | LOG_OUT_BEGIN | ');
  return {
    type: ActionTypes.LOG_OUT_BEGIN,
    payload: data,
  };
};

export const logOutEnd = data => {
  console.log('ACTION | LOG_OUT_END | ');
  return {
    type: ActionTypes.LOG_OUT_END,
    payload: data,
  };
};

export const signUpBegin = () => {
  console.log('ACTION | SIGN_UP_BEGIN | ');
  return {
    type: ActionTypes.SIGN_UP_BEGIN,
    payload: null,
  };
};

export const signUpEnd = user => {
  console.log('ACTION | SIGN_UP_END | ' + JSON.stringify(user));
  return {
    type: ActionTypes.SIGN_UP_END,
    payload: user,
  };
};

export const insertSalesBegin = () => {
  console.log('ACTION | INSERT_SALES_BEGIN | ');
  return {
    type: ActionTypes.INSERT_SALES_BEGIN,
    payload: null,
  };
};

export const insertSalesEnd = data => {
  console.log('ACTION | INSERT_SALES_END | ' + JSON.stringify(data));
  return {
    type: ActionTypes.INSERT_SALES_END,
    payload: data,
  };
};

export const updateSalesBegin = () => {
  console.log('ACTION | UPDATE_SALES_BEGIN | ');
  return {
    type: ActionTypes.UPDATE_SALES_BEGIN,
    payload: null,
  };
};

export const updateSalesEnd = data => {
  console.log('ACTION | UPDATE_SALES_END | ' + JSON.stringify(data));
  return {
    type: ActionTypes.UPDATE_SALES_END,
    payload: data,
  };
};

export const fetchAllUsersBegin = () => {
  console.log('ACTION | FETCH_ALL_USERS_BEGIN | ');
  return {
    type: ActionTypes.FETCH_ALL_USERS_BEGIN,
    payload: null,
  };
};

export const fetchAllUsersEnd = data => {
  console.log('ACTION | FETCH_ALL_USERS_END | ', JSON.stringify(data));
  return {
    type: ActionTypes.FETCH_ALL_USERS_END,
    payload: data,
  };
};

export const fetchAllRolesBegin = () => {
  console.log('ACTION | FETCH_ALL_ROLES_BEGIN | ');
  return {
    type: ActionTypes.FETCH_ALL_ROLES_BEGIN,
    payload: null,
  };
};

export const fetchAllRolesEnd = data => {
  console.log('ACTION | FETCH_ALL_ROLES_END | ', JSON.stringify(data));
  return {
    type: ActionTypes.FETCH_ALL_ROLES_END,
    payload: data,
  };
};

/* ENCRYPTION/DECRYPTION LOGIC | BEGIN */

const encryptPassword = val => {
  return new Promise((resolve, reject) => {
    let resultObj = {};
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(val.user_password, salt, function(err, hash) {
        //console.log('EP | ' + err + ' / ' + hash);
        if (err) {
          reject(err);
        } else {
          resultObj.user_password = hash;

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(
              val.user_user_name + val.user_password,
              salt,
              (err, hash) => {
                if (err) {
                  reject(err);
                } else {
                  resultObj.user_token = hash;
                  resolve(resultObj);
                }
              },
            );
          });
        }
      });
    });
  });
};

const decryptPassword = val => {};

/* ENCRYPTION/DECRYPTION LOGIC | END */

/* FETCH LOGIC HERE | BEGIN */
const prepareUpdateObject = (data, tableName, primaryKey) => {
  let setClause = '';
  let whereClause = ' where ' + primaryKey + ' = ?';
  let updateObj = {}; //statement,values
  updateObj.values = [];
  Object.keys(data).forEach(key => {
    if (key !== primaryKey) {
      if (setClause.length > 0) {
        setClause = setClause.concat(' , ');
      }
      setClause = setClause.concat(key + ' = ?');
      updateObj.values.push(data[key]);
    }
  });
  updateObj.values.push(data[primaryKey]);
  updateObj.statement =
    'UPDATE ' + tableName + ' SET ' + setClause + ' ' + whereClause;
  return updateObj;
};

const prepareInsertObject = (data, tableName) => {
  let insertObj = { values: data };
  insertObj.statement = 'INSERT INTO ' + tableName + ' SET ?';
  return insertObj;
};

const prepareQueryObject = (tableName, data) => {
  let queryObj = {
    values: [],
  };
  let whereClause = '';

  Object.keys(data).forEach(key => {
    if (whereClause.length > 0) {
      whereClause += ' and ';
    }
    whereClause += key + ' = ? ';
    queryObj.values.push(data[key]);
  });

  queryObj.statement = 'select * from ' + tableName + ' where ' + whereClause;
  return queryObj;
};
/*

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
}

*/
export function logout() {
  return function(dispatch) {
    dispatch(logOutBegin(null));

    localStorage.removeItem('iapp_user');
    localStorage.removeItem('iapp_loginTime');
    localStorage.removeItem('iapp_role_code');

    dispatch(logOutEnd(null));
  };
}
export function login(user) {
  return function(dispatch) {
    dispatch(loginBegin);

    const password = user.user_password;

    delete user.user_password;

    let queryObj = prepareQueryObject('users', user);

    console.log('Clause | ' + queryObj.statement);
    console.log('params | ' + JSON.stringify(queryObj.values));

    return fetch('/loginRequest', {
      body: JSON.stringify(queryObj),
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      referrer: 'np-referred',
    })
      .then(response => response.json(), error => dispatch(loginFail(error)))
      .then(json => {
        if (json) {
          if (json.user_password) {
            console.log('Login Result | ' + JSON.stringify(json));
            bcrypt.compare(password, json.user_password, (err, res) => {
              if (res) {
                /* make an entry to localStorage*/
                localStorage.setItem('iapp_user', json.user_token);
                localStorage.setItem('iapp_role_code', json.user_role_code);
                localStorage.setItem('iapp_loginTime', moment.now());

                console.log(' AUTH_TOKEN | ' + json.user_token);
                dispatch(loginEnd(json));
              } else {
                dispatch(loginFail(err));
              }
              console.log('Login Hash | ', err, '/', res);
            });
          }
        } else {
          dispatch(loginFail('No Record found'));
        }
      });
  };
}

export function signUp(user) {
  return function(dispatch) {
    dispatch(signUpBegin);

    encryptPassword(user).then(
      res => {
        //console.log('**** user password | ' + res);
        user.user_password = res.user_password;
        user.user_token = res.user_token;

        let insertObj = prepareInsertObject(user, 'users');
        console.log('Clause | ' + insertObj.statement);
        console.log('params | ' + JSON.stringify(insertObj.values));

        return fetch('/api/insertRequest', {
          body: JSON.stringify(insertObj),
          cache: 'no-cache',
          headers: {
            'content-type': 'application/json',
          },
          method: 'POST',
          mode: 'cors',
          redirect: 'follow',
          referrer: 'np-referrer',
        })
          .then(
            response => response.json(),
            error => console.log('Error in Insert Sales', error),
          )
          .then(json => dispatch(signUpEnd(json)));
      },
      err => {
        console.log('**** user password Error | ' + err);
      },
    );
  };
}
export function insertSales(sales) {
  return function(dispatch) {
    dispatch(insertSalesBegin);

    let insertObj = prepareInsertObject(sales, 'sales');
    console.log('Clause | ' + insertObj.statement);
    console.log('params | ' + JSON.stringify(insertObj.values));

    return fetch('/api/insertRequest', {
      body: JSON.stringify(insertObj),
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      referrer: 'np-referrer',
    })
      .then(
        response => response.json(),
        error => console.log('Error in Insert Sales', error),
      )
      .then(json => dispatch(insertSalesEnd(json)));
  };
}
export function updateSales(sales) {
  return function(dispatch) {
    dispatch(updateSalesBegin);
    let updateObj = prepareUpdateObject(sales, 'sales', 'sales_id');
    console.log('Clause | ' + updateObj.statement);
    console.log('params | ' + updateObj.values);
    return fetch('/api/updateRequest', {
      body: JSON.stringify(updateObj),
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      referrer: 'np-referrer',
    })
      .then(
        response => response.json(),
        error => console.log('Error in Update Sales', error),
      )
      .then(json => dispatch(updateSalesEnd(json)));
  };
}

export function fetchUsers() {
  return function(dispatch) {
    dispatch(fetchAllUsersBegin);

    return fetch('api/query/users')
      .then(
        response => response.json(),
        error => console.log('Error fetching All Users ', error),
      )
      .then(json => dispatch(fetchAllUsersEnd(json)));
  };
}

export function fetchRoles() {
  return function(dispatch) {
    dispatch(fetchAllRolesBegin);

    return fetch('api/query/roles')
      .then(
        response => response.json(),
        error => console.log('Error fetching All Users ', error),
      )
      .then(json => dispatch(fetchAllRolesEnd(json)));
  };
}

export function fetchSales() {
  return function(dispatch) {
    dispatch(requestSales);

    return fetch('api/query/sales')
      .then(
        response => response.json(),
        error => console.log('Error in fetchSales', error),
      )
      .then(json => dispatch(recieveSales(json)));
  };
}
/* FETCH LOGIC HERE | END */
