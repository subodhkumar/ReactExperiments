import React, { PureComponent } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Qbank from './questionBank';

// const Questions = [
//   {
//     question: 'Q1',
//     options: ['o1', 'o2', 'o3', 'o4'],
//     answer: 1,
//   },
//   {
//     question: 'Q2',
//     options: ['o1', 'o2', 'o3', 'o4'],
//     answer: 2,
//   },
//   {
//     question: 'Q3',
//     options: ['o1', 'o2', 'o3', 'o4'],
//     answer: 3,
//   },
//   {
//     question: 'Q4',
//     options: ['o1', 'o2', 'o3', 'o4'],
//     answer: 4,
//   },
//   {
//     question: 'Q5',
//     options: ['o1', 'o2', 'o3', 'o4'],
//     answer: 5,
//   },
// ];

const QuestionForm = props => {
  return (
    <div className="questionForm">
      <div className="qText">
        #{props.index}. {props.data.question}
      </div>
      {
        <div className="qOptionList">
          {props.data.options.map((o, index) => (
            <div>
              {!props.submitAnswer && (
                <div
                  className={
                    o === props.currentOption ? 'qOption-selected' : 'qOption'
                  }
                  key={index}
                  onClick={() => props.onOptionClick(o)}>
                  {o}
                </div>
              )}
              {props.submitAnswer &&
                o === props.currentOption && (
                  <div
                    className={
                      o === props.data.answer
                        ? 'qOption-selected-y'
                        : 'qOption-selected-n'
                    }
                    key={index}
                    onClick={() => props.onOptionClick(o)}>
                    {o}
                  </div>
                )}
              {props.submitAnswer &&
                o !== props.currentOption && (
                  <div
                    className={
                      o === props.data.answer ? 'qOption-selected-y' : 'qOption'
                    }
                    key={index}
                    onClick={() => props.onOptionClick(o)}>
                    {o}
                  </div>
                )}
            </div>
          ))}
        </div>
      }

      {!props.submitAnswer && (
        <div className="qButton" onClick={props.onSubmitAnswerClick}>
          {' '}
          Submit Answer
        </div>
      )}
    </div>
  );
};
class QuestionsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      correct: 0,
      currentOption: '-1',
      name: '',
      contact: '',
      duplicate: true,
      Questions: [],
      started: false,
      showUser: true,
      submitAnswer: false,
    };
    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
    this.onOptionClick = this.onOptionClick.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onContactChange = this.onContactChange.bind(this);
    this.onHomeClick = this.onHomeClick.bind(this);
    this.onRestartClick = this.onRestartClick.bind(this);
    this.onStartClick = this.onStartClick.bind(this);
  }
  componentDidMount() {
    this.setState({
      Questions: Qbank.getQuestions(),
    });
  }
  onStartClick = () => {
    if (!this.state.name || !this.state.contact) return;
    if (window.localStorage.getItem(this.state.contact)) {
      this.setState({
        started: true,
        duplicate: true,
      });
    } else {
      this.setState({
        duplicate: false,
        started: true,
        showUser: false,
      });
    }
  };
  onNameChange = e => {
    this.setState({
      name: e.target.value,
    });
  };
  onContactChange = e => {
    this.setState({
      contact: e.target.value,
    });
  };
  onSubmitAnswerClick = () => {
    this.setState({
      submitAnswer: true,
    });
  };
  onOptionClick = index => {
    if (!this.state.submitAnswer) {
      this.setState({
        currentOption: index,
      });
    }
  };
  onRestartClick = () => {
    this.setState({
      current: 1,
      correct: 0,
      currentOption: -1,
      name: '',
      contact: '',
      duplicate: true,
      Questions: Qbank.getQuestions(),
      submitAnswer: false,
    });
  };
  onHomeClick = () => {
    this.props.history.replace('/');
  };
  onNextClick = () => {
    this.setState({
      submitAnswer: false,
    });
    if (this.state.current === this.state.Questions.length) {
      {
        let finalScore =
          this.state.currentOption ===
          this.state.Questions[this.state.current - 1].answer
            ? 1
            : 0;

        this.setState(prevState => ({
          correct: prevState.correct + finalScore,
        }));
        let userScore = {
          name: this.state.name,
          contact: this.state.contact,
          score: this.state.correct + finalScore,
        };
        window.localStorage.setItem(
          this.state.contact,
          JSON.stringify(userScore),
        );
      }

      this.setState(prevState => ({
        current: prevState.current + 1,
      }));
      console.log(` DONE `);
    } else {
      this.setState(prevState => ({
        current: prevState.current + 1,
        correct:
          this.state.currentOption ===
          this.state.Questions[this.state.current - 1].answer
            ? prevState.correct + 1
            : prevState.correct,
        currentOption: '-1',
      }));
    }
  };
  onPrevClick = () => {
    if (this.state.current === 1) return;
    this.setState(prevState => ({
      current: prevState.current - 1,
    }));
  };
  render() {
    if (this.state.Questions && this.state.Questions.length > 0) {
      return (
        <div className="QuestionSection">
          {this.state.showUser && (
            <div className="userSection">
              <div>
                <div className="userLabel">Name</div>
                <input
                  placeholder="Eg., Ram Kumar"
                  onChange={this.onNameChange}
                  type="text"
                  value={this.state.name}
                />
              </div>
              <div>
                <div className="userLabel">Contact</div>
                <input
                  placeholder="Eg., 9123456789"
                  onChange={this.onContactChange}
                  type="number"
                  value={this.state.contact}
                />
              </div>
              <div class="userAction">
                <div className="qButton" onClick={this.onStartClick}>
                  Start
                </div>
                <div
                  className="qButton"
                  onClick={() => this.props.history.replace('/')}>
                  Cancel
                </div>
              </div>
            </div>
          )}
          {!this.state.duplicate &&
            this.state.current - 1 !== this.state.Questions.length && (
              <React.Fragment>
                <QuestionForm
                  onOptionClick={val => this.onOptionClick(val)}
                  index={this.state.current}
                  data={this.state.Questions[this.state.current - 1]}
                  currentOption={this.state.currentOption}
                  onSubmitAnswerClick={this.onSubmitAnswerClick}
                  submitAnswer={this.state.submitAnswer}
                />
              </React.Fragment>
            )}
          {this.state.current <= this.state.Questions.length &&
            this.state.name &&
            this.state.contact &&
            this.state.submitAnswer && (
              <div className="questionAction">
                <div className="qButton" onClick={this.onNextClick}>
                  Next
                </div>
              </div>
            )}

          {this.state.started &&
            this.state.duplicate && (
              <div className="userLabel">
                {' '}
                * An entry with the existing number already exists
              </div>
            )}
          {!this.state.duplicate &&
            this.state.current - 1 === this.state.Questions.length && (
              <div className="resultSection">
                {' '}
                <div className="resultTitle">Total Score </div>
                <div className="resultScore"> {this.state.correct} </div>
              </div>
            )}
          {this.state.current - 1 === this.state.Questions.length && (
            <div className="finalSection">
              <div onClick={this.onHomeClick} className="qButton">
                {' '}
                Home
              </div>
            </div>
          )}
          <div class="qLogoDiv" id="qLogoDiv1" />
          <div class="qLogoDiv" id="qLogoDiv2" />
        </div>
      );
    } else {
      return <div> No Questions..please check with the Admin</div>;
    }
  }
}

export default withRouter(QuestionsContainer);
