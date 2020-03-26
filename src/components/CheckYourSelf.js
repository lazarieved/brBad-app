import React from "react";
import {showAllCharacters, showCharacter} from "../actions/actions";
import {connect} from "react-redux";
import {Button, Typography} from "antd";
import {Link} from "react-router-dom";
import Quiz from "./Quiz";

const { Title } = Typography;
const demoItem = {
  char_id: 1,
  name: "Walter White",
  birthday: "09-07-1958",
  occupation: [
    "High School Chemistry Teacher",
    "Meth King Pin"
  ],
  img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
  status: "Deceased",
  appearance: [1, 2, 3, 4, 5],
  nickname: "Heisenberg",
  portrayed: "Bryan Cranston"
};
let randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

class CheckYourSelf extends React.Component{
  state = {
    randomNick1: 'unknown',
    randomNick2: 'unknown',
    randomNick3: 'unknown',
    randomActor1: 'unknown',
    randomActor2: 'unknown',
    randomActor3: 'unknown',
    isOpenedQuiz: false,
  };

  componentDidMount() {
    const {showCharacter, id, showAllCharacters} = this.props;
    let url;
    if (id) {
      url = `characters/${id}`
    } else {
      url = `character/random`
    }
    showAllCharacters('characters');
    showCharacter('character/random');

  }
  openQuiz = () => {
    const {characters} = this.props;
    this.setState({
      randomNick1: characters[randomInteger(1, 62)].nickname,
      randomNick2: characters[randomInteger(1, 62)].nickname,
      randomNick3: characters[randomInteger(1, 62)].nickname,
      randomActor1: characters[randomInteger(1, 62)].portrayed,
      randomActor2: characters[randomInteger(1, 62)].portrayed,
      randomActor3: characters[randomInteger(1, 62)].portrayed,
      isOpenedQuiz: true,
    });
  };

  render() {
    const {characterItem, characters} = this.props;
    let charItem = characterItem[0] || {};
    console.log(charItem, 'charItem in CHECKYOURSELF');

    return (
      <div className='container-character-page'>
        <Button type="primary">
          <Link to={`/`}>⤶ Back</Link>
        </Button>
        <div className='left-side-character-page'>
          <img className='character-page-img' src={charItem.img ? charItem.img : demoItem.img} />
          <Title>{charItem.name ? charItem.name : demoItem.name}</Title>
        </div>
        <div className='right-side-character-page'>
          {this.state.isOpenedQuiz ? null : <Button type='primary' onClick={this.openQuiz}>Open QUIZ</Button>}
          {this.state.isOpenedQuiz ?
            <Quiz
            charItem={charItem}
            demoItem={demoItem}
            characters={characters}
            state={this.state}
          /> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store, props) => {
  const {
    charactersReducer: {
      characters = [],
      characterItem = [],
    }
  } = store;
  const {match: {params: {id}}} = props;
  return {characters, characterItem, id}
};

const mapDispatchToProps = dispatch => {
  return {
    showCharacter: url => dispatch(showCharacter(url)),
    showAllCharacters: url => dispatch(showAllCharacters(url)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckYourSelf);
