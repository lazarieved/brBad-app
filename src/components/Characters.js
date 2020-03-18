import React from "react";
import FilterComponent from "./FilterComponent";
import CharactersList from "./CharactersList";
import {connect} from "react-redux";
import {showAllCharacters} from "../actions/actions";

class Characters extends React.Component {
  componentDidMount() {
    console.log(this.props, 'didMount');
    this.props.showAllCharacters('characters')
  }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log(this.props, 'didUpdate')
  // }

  render() {
    const {characters} = this.props;
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
    }
  } = store;
  return {characters}
};

const mapDispatchToProps = dispatch => {
  return {
    showAllCharacters: url => dispatch(showAllCharacters(url)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Characters);

