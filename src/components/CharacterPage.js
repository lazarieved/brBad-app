import React from "react";
import '../index.css'
import {Button} from "antd";
import { Typography } from 'antd';
import {Link} from "react-router-dom";

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
const demoItem = demo[0];

class CharacterPage extends React.Component{
  render() {
    return (
      <div className='container-character-page'>
        <div className='left-side-character-page'>
          <img className='character-page-img' src={demoItem.img}></img>
          <Title>{demoItem.name}</Title>
          <Title level={3}>{demoItem.nickname}</Title>
          <Button
            type="primary"
            style={{padding: '10px 20px 35px 20px', fontSize: '18px'}}
          >
            <Link to='/check-yourself'>Haw do you naw this character?</Link>
          </Button>
        </div>
        <div className='right-side-character-page'>

        </div>
      </div>
    );
  }
}

export default CharacterPage;
