import React from "react";
import '../index.css'
import {Button} from "antd";
import { Typography } from 'antd';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {showCharacter} from "../actions/actions";

const { Title } = Typography;
const demo = [
  {
    "char_id": 2,
    "name": "Jesse Pinkman",
    "birthday": "09-24-1984",
    "occupation": [
      "Meth Dealer"
    ],
    "img": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg",
    "status": "Alive",
    "nickname": "Cap n' Cook",
    "appearance": [
      1,
      2,
      3,
      4,
      5
    ],
    "portrayed": "Aaron Paul",
    "category": "Breaking Bad",
    "better_call_saul_appearance": []
  }
];
const demo2 = [
  {
    "name": "Jesse Pinkman",
    "deathCount": 3
  }
];
const demoDeath = demo2[0];
const demoItem = demo[0];

class CharacterPage extends React.Component{
  componentDidMount() {
    const {showCharacter, id} = this.props;
    showCharacter(`characters/${id}`)
  }

  render() {
    const {characterItem} = this.props;
    let charItem = characterItem[0] || {};
    console.log(charItem, 'charItem');

    return (
      <div className='container-character-page'>
        <div className='left-side-character-page'>
          <img className='character-page-img' src={charItem.img} />
          <Title>{charItem.name}</Title>
          <Title level={3}>nickname: {charItem.nickname}</Title>
          <Button
            type="primary"
            style={{padding: '10px 20px 35px 20px', fontSize: '18px'}}
          >
            <Link to='/check-yourself'>Haw do you naw this character?</Link>
          </Button>
        </div>
        <div className='right-side-character-page'>
          <Title> Description:</Title>
          <span className='right-side-character-page-span'>
            Was born: {charItem.birthday ? charItem.birthday : 'unknown'}
          </span>
          <span className='right-side-character-page-span'> Occupation: {charItem.occupation}</span>
          <span className='right-side-character-page-span'> Status: {charItem.status}</span>
          <span className='right-side-character-page-span'> Actor: {charItem.portrayed}</span>
          <span className='right-side-character-page-span'>
            Killed: {demoDeath.deathCount} {demoDeath.deathCount > 1 ? 'peaple' : 'perosn'}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store, props) => {
  const {
    charactersReducer: {
      characterItem = [],
    }
  } = store;
  const {match: {params: {id}}} = props;
  return {characterItem, id}
};

const mapDispatchToProps = dispatch => {
  return {
    showCharacter: url => dispatch(showCharacter(url)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CharacterPage);
