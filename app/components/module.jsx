import React from 'react';
import ReactDOM from 'react-dom';
import styles from './module.scss';

class Board extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var className = styles.board;
    if (this.props.selected) {
      className += " " + styles.selected;
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }

};

class BoardSwitcher extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  toggleBoard(evt) {
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.numBoards
    });
  }

  render() {
    var boards = [];
    for (var ii = 0; ii < this.props.numBoards; ii++) {
      var isSelected = ii === this.state.selectedIndex;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }
    
    return (
      <div>
        <div className={styles.boards}>{boards}</div>
        <button onClick={this.toggleBoard.bind(this)}>Toggle</button>
      </div>
    );
  }

};

ReactDOM.render(
  <BoardSwitcher numBoards={13} />,
  document.getElementById('container')
);
