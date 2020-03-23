import React from "react";
import {Button, Typography} from "antd";
import {Link} from "react-router-dom";
import {showAllCharacters, showCharacter} from "../actions/actions";
import {connect} from "react-redux";

const {Title} = Typography;
let randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

class Quiz extends React.Component {
  // state = {
  //   randomValue1: 'unknown',
  //   randomValue2: 'unknown',
  //   randomValue3: 'unknown',
  // };

  // componentDidMount() {
  //   const {characters} = this.props;
  //     console.log(characters, 'didMount Quiz');
  //     this.setState({
  //       randomValue1: characters[randomInteger(1, 62)].nickname,
  //       randomValue2: characters[randomInteger(1, 62)].nickname,
  //       randomValue3: characters[randomInteger(1, 62)].nickname,
  //     })
  //   }
  // }

  trueAnswer = () => {
    alert(`Good job you really know ${
      this.props.charItem.name 
      ? this.props.charItem.name 
      : this.props.demoItem.name
    } !!!`)
  };
  falseAnswer = () => {
    alert(`You don't know ${
      this.props.charItem.name 
      ? this.props.charItem.name 
      : this.props.demoItem.name
    } :(`)
  };


  render() {
    const {
      nickname,
    } = this.props.charItem;
    const {
      randomValue1,
      randomValue2,
      randomValue3
    } = this.props.state;
    const buttonStyle = {
      padding: '20px 30px 40px 30px',
      margin: '20px'
    };

    return (
      <div>
        <Title> Quiz: </Title>
        <Title level={2}> What is true? </Title>
        <div className='quiz-div'>
          <Button type="primary" style={buttonStyle} onClick={this.falseAnswer}>
            {randomValue1}
          </Button>
          <Button type="primary" style={buttonStyle} onClick={this.falseAnswer}>
            {randomValue2}
          </Button>
          <Button type="primary" style={buttonStyle} onClick={this.falseAnswer}>
            {randomValue3}
          </Button>
          <Button type="primary" style={buttonStyle} onClick={this.trueAnswer}>
            {nickname ? nickname : this.props.demoItem.nickname}
          </Button>
        </div>
      </div>
    );
  }
}
export default Quiz;
