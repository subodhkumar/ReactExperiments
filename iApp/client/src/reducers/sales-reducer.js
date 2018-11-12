import { ActionTypes } from '../actions/action-types';
export default function(state = [], action) {
  console.log('In Sales reducer');
  switch (action.type) {
    case ActionTypes.REQUEST_SALES:
      console.log(' Waiting for data');
      return state;
    case ActionTypes.RECEIVE_SALES:
      console.log(' received the data ');
      return action.payload.data;
    default:
      return state;
  }
}
/*export default function(){
 return [ {
    "bidNo": "12345",
    "bidReceivedDate": (new Date()).toDateString(),
    "bidDueDate": (new Date()).toDateString(),
    "bidSentDate": (new Date()).toDateString(),
    "fabricator": "HELIXO",
    "projectName": "Project Test #1",
    "executive": "Jan Brennan",
    "status": "Started"
  },
  {
    "bidNo": "12346",
    "bidReceivedDate": (new Date()).toDateString(),
    "bidDueDate": (new Date()).toDateString(),
    "bidSentDate": (new Date()).toDateString(),
    "fabricator": "HELIXO",
    "projectName": "Project Test #1",
    "executive": "Jan Brennan",
    "status": "Started"
  },
  {
    "bidNo": "12347",
    "bidReceivedDate": (new Date()).toDateString(),
    "bidDueDate": (new Date()).toDateString(),
    "bidSentDate": (new Date()).toDateString(),
    "fabricator": "HELIXO",
    "projectName": "Project Test #1",
    "executive": "Jan Brennan",
    "status": "Started"
  },
  {
    "bidNo": "12348",
    "bidReceivedDate": (new Date()).toDateString(),
    "bidDueDate": (new Date()).toDateString(),
    "bidSentDate": (new Date()).toDateString(),
    "fabricator": "HELIXO",
    "projectName": "Project Test #1",
    "executive": "Jan Brennan",
    "status": "Started"
  },
  {
    "bidNo": "12349",
    "bidReceivedDate": (new Date()).toDateString(),
    "bidDueDate": (new Date()).toDateString(),
    "bidSentDate": (new Date()).toDateString(),
    "fabricator": "HELIXO",
    "projectName": "Project Test #1",
    "executive": "Jan Brennan",
    "status": "Started"
  },
  {
    "bidNo": "12350",
    "bidReceivedDate": (new Date()).toDateString(),
    "bidDueDate": (new Date()).toDateString(),
    "bidSentDate": (new Date()).toDateString(),
    "fabricator": "HELIXO",
    "projectName": "Project Test #1",
    "executive": "Jan Brennan",
    "status": "Started"
  },
  {
    "bidNo": "12351",
    "bidReceivedDate": (new Date()).toDateString(),
    "bidDueDate": (new Date()).toDateString(),
    "bidSentDate": (new Date()).toDateString(),
    "fabricator": "HELIXO",
    "projectName": "Project Test #1",
    "executive": "Jan Brennan",
    "status": "Started"
  },
  {
    "bidNo": "12352",
    "bidReceivedDate": (new Date()).toDateString(),
    "bidDueDate": (new Date()).toDateString(),
    "bidSentDate": (new Date()).toDateString(),
    "fabricator": "HELIXO",
    "projectName": "Project Test #1",
    "executive": "Jan Brennan",
    "status": "Started"
  },
  ];   
}*/
