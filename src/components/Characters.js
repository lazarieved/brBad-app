import React from "react";
import FilterComponent from "./FilterComponent";
import CharactersList from "./CharactersList";
import {connect} from "react-redux";
import { Typography } from 'antd';
import {
  getAliveCharacters,
  getDeadCharacters,
  showAllCharacters,
  showCharacter,
  showSearchCharacters
} from "../actions/actions";

const { Title } = Typography;

class Characters extends React.Component {
  componentDidMount() {
    this.props.showAllCharacters('characters')
  }

  render() {
    const {
      characters,
      showCharacter,
      showSearchCharacters,
      searchCharacters,
      getAliveCharacters,
      showAllCharacters,
      getDeadCharacters,
    } = this.props;
    const divStyle1 = {
      width: '300px',
      height: '800px',
      background: '#fff',
      padding: 24,
      marginRight: '20px'
    };
    const divStyle2 = {
      background: '#fff',
      padding: 24,
      minHeight: 280,
      width: '100%'
    };
    const divStyle0 = {
      display: 'flex',
      flexDirection: 'raw'
    };

    return (
      <div style={divStyle0}>
        <div className='filter' style={divStyle1}>
          <FilterComponent
            showSearchCharacters={showSearchCharacters}
            getAliveCharacters={getAliveCharacters}
            showAllCharacters={showAllCharacters}
            getDeadCharacters={getDeadCharacters}
          />
        </div>
        <div style={divStyle2}>
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
