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
let contains = (arr, str) => {
  return arr.indexOf( str ) !== -1
};

class Quiz extends React.Component {
  state = {
    isOpenNick: false,
    isOpenStatus: false,
    isOpenActor: false,
    isOpen: [],
  };

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

  trueAnswer = str => () => {
    alert(`Good job you really know ${
      this.props.charItem.name
        ? this.props.charItem.name
        : this.props.demoItem.name
    } !!!`);
    this.setState({
      isOpenNick: false,
      isOpenStatus: false,
      isOpenActor: false,
      isOpen: [...this.state.isOpen, ...str.split()],
    })
  };
  falseAnswer = () => {
    alert(`You don't know ${
      this.props.charItem.name
        ? this.props.charItem.name
        : this.props.demoItem.name
    } :(`);
  };
  isOpenNick = () => {
    this.setState({
      isOpenNick: true
    })
  };
  isOpenStatus = () => {
    this.setState({
      isOpenStatus: true
    })
  };
  isOpenActor = () => {
    this.setState({
      isOpenActor: true
    })
  };


  render() {
    const {
      nickname,
      status,
      portrayed,
    } = this.props.charItem;
    const {
      randomNick1,
      randomNick2,
      randomNick3,
      randomActor1,
      randomActor2,
      randomActor3,
    } = this.props.state;
    const buttonStyle = {
      padding: '20px 30px 40px 30px',
      margin: '20px'
    };
    let inclNick = this.state.isOpen.includes('nick');
    let inclStatus = this.state.isOpen.includes('status');
    let inclActor = this.state.isOpen.includes('actor');
    console.log(this.state.isOpen, 'this.state.isOpen')

    return (
      <div>
        <Title> Quiz: </Title>
        <Title level={2}> What is true? </Title>
        <div className='quiz-main-button-div'>
          {this.state.isOpenNick
            ? null
            : <Button type="primary" onClick={this.isOpenNick} style={{margin: '10px'}}>
              Which nickname is correct? {inclNick ? ' ✓' : null}
          </Button>}
          {this.state.isOpenNick
            ? <div className='quiz-div'>
              <Title level={3} style={{width: '100%'}}>Which nickname is correct?</Title>
              <div className="div-button">
                <Button type="primary" style={buttonStyle} onClick={this.falseAnswer}>
                  {randomNick1}
                </Button>
                <Button type="primary" style={buttonStyle} onClick={this.falseAnswer}>
                  {randomNick2}
                </Button>
                <Button type="primary" style={buttonStyle} onClick={this.falseAnswer}>
                  {randomNick3}
                </Button>
                <Button type="primary" style={buttonStyle} onClick={this.trueAnswer('nick')}>
                  {nickname ? nickname : this.props.demoItem.nickname}
                </Button>
              </div>
            </div>
            : null}
          {this.state.isOpenStatus
            ? null
            : <Button type="primary" onClick={this.isOpenStatus} style={{margin: '10px'}}>
              Which status is correct? {inclStatus ? ' ✓' : null}
          </Button>}
          {this.state.isOpenStatus
            ? <div className='quiz-div'>
              <Title level={3} style={{width: '100%'}}>Which status is correct?</Title>
              <div className="div-button">
                <Button type="primary" style={buttonStyle} onClick={this.trueAnswer('status')}>
                  {status ? status : this.props.demoItem.status}
                </Button>
                <Button type="primary" style={buttonStyle} onClick={this.falseAnswer}>
                  {status === 'Alive' ? 'Dead' : 'Alive'}
                </Button>
              </div>
            </div>
            : null}
          {this.state.isOpenActor
            ? null
            : <Button type="primary" onClick={this.isOpenActor} style={{margin: '10px'}}>
              Which actor is correct? {inclActor ? ' ✓' : null}
            </Button>}
          {this.state.isOpenActor
            ? <div className='quiz-div'>
              <Title level={3} style={{width: '100%'}}>Which actor is correct?</Title>
              <div className="div-button">
                <Button type="primary" style={buttonStyle} onClick={this.falseAnswer}>
                  {randomActor1}
                </Button>
                <Button type="primary" style={buttonStyle} onClick={this.falseAnswer}>
                  {randomActor2}
                </Button>
                <Button type="primary" style={buttonStyle} onClick={this.trueAnswer('actor')}>
                  {portrayed ? portrayed : this.props.demoItem.portrayed}
                </Button>
                <Button type="primary" style={buttonStyle} onClick={this.falseAnswer}>
                  {randomActor3}
                </Button>
              </div>
            </div>
            : null}
        </div>
      </div>
    );
  }
}

export default Quiz;
