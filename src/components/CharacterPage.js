import React from "react";
import '../index.css'
import {Button} from "antd";
import { Typography } from 'antd';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

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
  render() {
    const {characterItem} = this.props;
    let charItem = characterItem[0];
    console.log(charItem, 'charItem');

    return (
      <div className='container-character-page'>
        <div className='left-side-character-page'>
          <img className='character-page-img' src={charItem.img}/>
          <Title>{demoItem.name}</Title>
          <Title level={3}>nickname: {demoItem.nickname}</Title>
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
            Was born: {demoItem.birthday ? demoItem.birthday : 'unknown'}
          </span>
          <span className='right-side-character-page-span'> Occupation: {demoItem.occupation.join(',')}</span>
          <span className='right-side-character-page-span'> Status: {demoItem.status}</span>
          <span className='right-side-character-page-span'> Actor: {demoItem.portrayed}</span>
          <span className='right-side-character-page-span'>
            Killed: {demoDeath.deathCount} {demoDeath.deathCount > 1 ? 'peaple' : 'perosn'}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  const {
    charactersReducer: {
      characterItem = [],
    }
  } = store;
  return {characterItem}
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CharacterPage);
