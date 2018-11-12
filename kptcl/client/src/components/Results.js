import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      topScores: [],
      loading: true,
      pwd: '',
      invalid: false,
      clearRequest: false,
    };
  }
  loadScores = () => {
    let TotalUsers = [];
    for (var i = 0; i < localStorage.length; i++) {
      let obj = localStorage.getItem(localStorage.key(i));
      try {
        let jobj = JSON.parse(obj);
        if (jobj.name && jobj.contact && jobj.score) {
          TotalUsers.push(jobj);
        }
      } catch (err) {
        console.error(` ### ERR @ ${i} | ${err}`);
      }
    }
    console.log(` TOTAL | ${TotalUsers.length}`);
    TotalUsers.sort((a, b) => {
      return b.score - a.score;
    });
    this.setState({
      topScores: TotalUsers,
    });
  };
  componentDidMount() {
    this.loadScores();
  }
  onSubmitClick = () => {
    if (this.state.pwd === 'lctpk') {
      this.setState({
        auth: true,
        invalid: false,
      });
    } else {
      this.setState({
        invalid: true,
      });
    }
  };
  render() {
    return (
      <div>
        {!this.state.auth && (
          <div className="rAuth">
            <div className="userLabel">Enter the password</div>
            <input
              type="password"
              onChange={e =>
                this.setState({
                  pwd: e.target.value,
                })
              }
              value={this.state.pwd}
            />
            <div className="rAction">
              <div className="qButton" onClick={this.onSubmitClick}>
                Submit
              </div>
              <div
                className="qButton"
                onClick={() => this.props.history.replace('/')}>
                Cancel
              </div>
            </div>

            {this.state.invalid && (
              <div className="userLabel"> Invalid Password...please check!</div>
            )}
          </div>
        )}{' '}
        {this.state.auth &&
          !this.state.clearRequest && (
            <div>
              <div
                className="qButton"
                onClick={() => this.props.history.replace('/')}>
                Home
              </div>
              <div
                className="qButton"
                onClick={() =>
                  this.setState({
                    clearRequest: true,
                  })
                }>
                Clear
              </div>
              <div className="userLabel">Results</div>
              <div className="resultsSection">
                {this.state.topScores.map((ts, index) => {
                  return (
                    <div className="resutsDiv" key={index}>
                      <div className="rName">{ts.name} </div>
                      <div className="rContact">Contact | {ts.contact} </div>
                      <div className="rScore">Score | {ts.score} </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        {this.state.auth &&
          this.state.clearRequest && (
            <div>
              <div className="userLabel">
                {' '}
                This will clear all the user results & details. Do you want to
                continue?
              </div>
              <div
                className="qButton"
                onClick={() => {
                  localStorage.clear();
                  this.loadScores();
                  this.setState({ clearRequest: false });
                }}>
                Yes
              </div>
              <div
                className="qButton"
                onClick={() => {
                  this.setState({ clearRequest: false });
                }}>
                No
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default Results;
