import React from "react";
import FilterComponent from "./FilterComponent";
import CharactersList from "./CharactersList";
import {connect} from "react-redux";
import {showAllCharacters, showCharacter} from "../actions/actions";

class Characters extends React.Component {
  componentDidMount() {
    console.log(this.props, 'didMount character');
    this.props.showAllCharacters('characters')
  }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log(this.props, 'didUpdate')
  // }

  render() {
    const {characters, showCharacter, characterItem} = this.props;
    console.log(characterItem, 'characterItem');

    return (
      <div style={{display: 'flex', flexDirection: 'raw'}}>
        <div className='filter' style={{
          width: '300px',
          height: '800px',
          background: '#fff', padding: 24,
          marginRight: '20px'
        }}>
          <FilterComponent />
        </div>
        <div style={{background: '#fff', padding: 24, minHeight: 280, width: '100%'}}>
          <span>Characters</span>
          <CharactersList
            characters={characters}
            showCharacter={showCharacter}
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
    }
  } = store;
  return {characters, characterItem}
};

const mapDispatchToProps = dispatch => {
  return {
    showAllCharacters: url => dispatch(showAllCharacters(url)),
    showCharacter: url => dispatch(showCharacter(url)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Characters);

