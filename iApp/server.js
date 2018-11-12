const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const appkeys = require('./keys.js');

const port = process.env.PORT || 5000;

const connection = mysql.createConnection({
  host: appkeys.db.host,
  port: appkeys.db.port,
  user: appkeys.db.username,
  password: appkeys.db.password,
  database: appkeys.db.database,
});

const RESULT_STATUS = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

function initDBConnection() {
  connection.connect(err => {
    if (err) {
      console.log('Error Connection | ' + err.stack);
      return;
    }
    console.log('Connected as Id : ' + connection.threadId);
  });
}

//initDBConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/callback', (req, res) => {
  res.send({ express: 'Callback reached!' });
});
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' + new Date() });
});
app.get('/api/authContent', (req, res) => {
  res.send({ express: 'Hello Post the Authentication' });
});

/* API | DB */
app.get('/api/db/start', (req, res) => {
  if (connection.threadId) {
    res.send(' DB Connection is Open !!');
  } else {
    initDBConnection();
  }
});
app.get('/api/db/close', (req, res) => {
  if (connection.threadId) {
    connection.end(err => {
      if (err) {
        res.send(' DB Connection Close request Successful !!');
      }
      res.send(' DB Connection is Closed');
    });
  } else {
    res.send(' DB Connection Close request Failed !!');
  }
});
app.get('/api/db', (req, res) => {
  if (connection.threadId) {
    res.send({ data: 'Data Request Here | ' + appkeys.db.database });
  } else {
    res.send({ data: 'DB Connection failed. Please check with administrator' });
  }
});

/*API | CALLS*/

const returnResult = (err, data) => {
  let resultObj = {
    status: RESULT_STATUS.ERROR,
    data: [],
    error: '',
  };
  if (err) {
    resultObj.error = err;
    //console.log(err);
  } else {
    resultObj.status = RESULT_STATUS.SUCCESS;
    resultObj.data = data;
    //console.log(JSON.stringify(data));
  }
  return resultObj;
};
app.get('/api/query/:ds', (req, res) => {
  /* STATUS, DATA, ERR */
  let tableName = connection.escape(req.params.ds);
  let sql = 'select * from '.concat(req.params.ds);
  //console.log(sql);
  connection.query(sql, (error, result, fields) => {
    res.send(returnResult(error, result));
  });
});
app.post('/loginRequest', (req, res) => {
  console.log('***** LOGIN REQUEST ****** | ' + JSON.stringify(req.body));
  let queryObj = req.body;
  connection.query(
    queryObj.statement,
    queryObj.values,
    (error, result, fields) => {
      if (error) {
        console.log('*** LOGIN ERROR *** | ' + JSON.stringify(error));
        res.send(error);
      } else {
        console.log('*** LOGIN SUCCESS *** | ' + JSON.stringify(result));
        resultObj = {
          user_token: result[0].user_token,
          user_password: result[0].user_password,
          user_role_code: result[0].user_role_code,
        };
        res.send(resultObj);
      }
    },
  );
});
app.post('/api/insertRequest/', (req, res) => {
  console.log('***** INSERT REQUEST ****** | ' + JSON.stringify(req.body));
  var updateObj = req.body;

  connection.query(
    updateObj.statement,
    updateObj.values,
    (error, result, fields) => {
      if (error) {
        console.log('*** INSERT ERROR *** | ' + error);
      } else {
        console.log('*** INSERT SUCCESS *** | ' + JSON.stringify(result));
      }
      res.send(result);
    },
  );
});

app.post('/api/updateRequest/', (req, res) => {
  console.log('***** UPDATE REQUEST ****** | ' + JSON.stringify(req.body));
  var updateObj = req.body;

  connection.query(
    updateObj.statement,
    updateObj.values,
    (error, result, fields) => {
      if (error) {
        console.log('*** UPDATE ERROR *** | ' + error);
      } else {
        console.log('*** UPDATE SUCCESS *** | ' + JSON.stringify(result));
      }
      res.send(result);
    },
  );
});
app.post('/api/upsert/:ds', (req, res) => {
  /* STATUS, DATA, ERR */
  let result = {
    status: RESULT_STATUS.ERROR,
    data: [],
    error: '',
  };
  res.send(result);
});
app.post('/api/delete/:ds', (req, res) => {
  /* STATUS, DATA, ERR */
  let result = {
    status: RESULT_STATUS.ERROR,
    data: [],
    error: '',
  };
  res.send(result);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
