import React from "react";
import FilterComponent from "./FilterComponent";
import CharactersList from "./CharactersList";
import {connect} from "react-redux";
import { Typography } from 'antd';
import {
  getAliveCharacters, getAllCharacters,
  getDeadCharacters,
  showAllCharacters,
  showCharacter,
  showSearchCharacters
} from "../actions/actions";

const { Title } = Typography;

class Characters extends React.Component {
  componentDidMount() {
    console.log(this.props, 'didMount character');
    this.props.showAllCharacters('characters')
  }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log(this.props, 'didUpdate')
  // }

  render() {
    const {
      characters,
      showCharacter,
      characterItem,
      showSearchCharacters,
      searchCharacters,
      getAliveCharacters,
      showAllCharacters,
      getDeadCharacters,
    } = this.props;
    console.log(characterItem, 'characterItem');

    return (
      <div style={{display: 'flex', flexDirection: 'raw'}}>
        <div className='filter' style={{
          width: '300px',
          height: '800px',
          background: '#fff', padding: 24,
          marginRight: '20px'
        }}>
          <FilterComponent
            showSearchCharacters={showSearchCharacters}
            getAliveCharacters={getAliveCharacters}
            showAllCharacters={showAllCharacters}
            getDeadCharacters={getDeadCharacters}
          />
        </div>
        <div style={{background: '#fff', padding: 24, minHeight: 280, width: '100%'}}>
          <Title>Characters</Title>
          <CharactersList
            characters={characters}
            showCharacter={showCharacter}
            searchCharacters={searchCharacters}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  const {
    charactersReducer: {
      characters = [],
      characterItem = [],
      searchCharacters = [],
    }
  } = store;
  return {characters, characterItem, searchCharacters}
};

const mapDispatchToProps = dispatch => {
  return {
    showAllCharacters: url => dispatch(showAllCharacters(url)),
    showCharacter: url => dispatch(showCharacter(url)),
    showSearchCharacters: value => dispatch(showSearchCharacters(value)),
    getAliveCharacters: () => dispatch(getAliveCharacters()),
    getDeadCharacters: () => dispatch(getDeadCharacters()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Characters);

