import React, { Component } from 'react';
import Users from '../components/users';
import Roles from '../components/roles';
import { Col, Col2 } from '../components/library/grid';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/lib/connect/connect';
import { fetchUsers, fetchRoles } from '../actions/index';
import DataList from '../components/library/datalist';
import Button from '../components/library/button';

class UserManageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allUsers: this.props.allUsers,
      allRoles: this.props.allRoles,
    };
  }

  componentWillMount() {
    this.props.fetchUsers();
    this.props.fetchRoles();
  }

  createSalesList() {
    /*
    [{"sales_id":1,"sales_number":1234,"fabricator":"Fab#1","project_name":"Proj#1",
    "bid_number":234,"bid_received_date":null,"bid_due_date":null,"bid_sent_date":null,"executive":"Subodh Kumar","status":null}]
    */
    const objList = {
      columns: ['user_name', 'user_email', 'user_contact_number'],
      labels: ['User', 'Email', 'Contact'],
      types: ['string', 'string', 'number'],

      data: this.props.allUsers,
    };
    return (
      <div>
        <DataList data={objList} key="user_email" onRowClick="" />
      </div>
    );
  }

  renderRoles() {
    const objList = {
      columns: ['role_code', 'role_name'],
      labels: ['Role Code', 'Role Name'],
      types: ['string', 'string'],

      data: this.props.allRoles,
    };
    return (
      <div>
        <DataList data={objList} key="role_code" onRowClick="" />
      </div>
    );
  }
  renderUsers() {
    const objList = {
      columns: ['user_name', 'user_email', 'user_contact_number'],
      labels: ['User', 'Email', 'Contact'],
      types: ['string', 'string', 'number'],

      data: this.props.allUsers,
    };
    return (
      <div>
        <DataList data={objList} key="user_email" onRowClick="" />
      </div>
    );
  }
  render() {
    return (
      <div>
        <Col right>
          {' '}
          <div>
            <Button value="Add User" />
          </div>
        </Col>
        <Col>
          <div>{this.renderUsers()}</div>
          <div>{this.renderRoles()}</div>
        </Col>
      </div>
    );
  }
}

function mapStateToProps({ allUsers, allRoles }) {
  return { allUsers, allRoles };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers, fetchRoles }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserManageContainer),
);
