import React from "react";
import {Button, Typography} from "antd";

const {Title} = Typography;

class Quiz extends React.Component {
  state = {
    isOpenNick: false,
    isOpenStatus: false,
    isOpenActor: false,
    isOpen: [],
  };

  trueAnswer = str => () => {
    const {name} = this.props.charItem;
    alert(`Good job you really know ${name
        ? name
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
    const {name} = this.props.charItem;
    alert(`You don't know ${
      name
        ? name
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
    const {
      isOpen,
      isOpenNick,
      isOpenStatus,
      isOpenActor
    } = this.state;
    const titleStyle3 = {
      width: '100%'
    };
    const buttonStyleMarg = {
      margin: '10px'
    };
    let inclNick = isOpen.includes('nick');
    let inclStatus = isOpen.includes('status');
    let inclActor = isOpen.includes('actor');

    return (
      <div>
        <Title> Quiz </Title>
        <Title level={2}> What is true? </Title>
        <div className='quiz-main-button-div'>
          {isOpenNick
            ? null
            : <Button type="primary" onClick={this.isOpenNick} style={buttonStyleMarg}>
              Which nickname is correct? {inclNick ? ' ✓' : null}
            </Button>}
          {isOpenNick
            ? <div className='quiz-div'>
              <Title level={3} style={titleStyle3}>Which nickname is correct?</Title>
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
          {isOpenStatus
            ? null
            : <Button type="primary" onClick={this.isOpenStatus} style={buttonStyleMarg}>
              Which status is correct? {inclStatus ? ' ✓' : null}
            </Button>}
          {isOpenStatus
            ? <div className='quiz-div'>
              <Title level={3} style={titleStyle3}>Which status is correct?</Title>
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
          {isOpenActor
            ? null
            : <Button type="primary" onClick={this.isOpenActor} style={buttonStyleMarg}>
              Which actor is correct? {inclActor ? ' ✓' : null}
            </Button>}
          {isOpenActor
            ? <div className='quiz-div'>
              <Title level={3} style={buttonStyle}>Which actor is correct?</Title>
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
