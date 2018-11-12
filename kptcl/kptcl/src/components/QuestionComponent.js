import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

const Questions = [
  {
    question: 'Q1',
    options: ['o1', 'o2', 'o3', 'o4'],
    answer: 'o2',
  },
  {
    question: 'Q2',
    options: ['o1', 'o2', 'o3', 'o4'],
    answer: 'o2',
  },
  {
    question: 'Q3',
    options: ['o1', 'o2', 'o3', 'o4'],
    answer: 'o2',
  },
  {
    question: 'Q4',
    options: ['o1', 'o2', 'o3', 'o4'],
    answer: 'o2',
  },
  {
    question: 'Q5',
    options: ['o1', 'o2', 'o3', 'o4'],
    answer: 'o2',
  },
];
const QuestionForm = props => {
  return (
    <div className="questionForm">
      <div>{props.data.question}</div>
    </div>
  );
};
class QuestionsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      correct: 0,
    };
    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
  }
  onNextClick = () => {
    if (this.state.current === Questions.length) return;
    this.setState(prevState => ({
      current: prevState.current + 1,
    }));
  };
  onPrevClick = () => {
    if (this.state.current === 1) return;
    this.setState(prevState => ({
      current: prevState.current - 1,
    }));
  };
  render() {
    return (
      <div>
        <QuestionForm
          onNextClick={this.onNextClick}
          onPrevClick={this.onPrevClick}
          data={Questions[this.state.current - 1]}
        />
        <div class="questionAction">
          <div class="qButton" onClick={this.onPrevClick}>
            Previous
          </div>
          <div class="qButton" onClick={this.onNextClick}>
            Next
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(QuestionsContainer);
