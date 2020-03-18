import React from "react";
import FilterComponent from "./FilterComponent";
import EpisodesList from "./EpisodesList";
import {showAllCharacters, showAllEpisodes} from "../actions/actions";
import {connect} from "react-redux";

class Episodes extends React.Component{
  componentDidMount() {
    this.props.showAllEpisodes('episodes')
  }

  render() {
    const {episodes} = this.props;

    return (
      <div>
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
            <span>Episodes</span>
            <EpisodesList episodes={episodes} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  const {
    episodeReducer: {
      episodes = [],
    }
  } = store;
  return {episodes}
};

const mapDispatchToProps = dispatch => {
  return {
    showAllEpisodes: url => dispatch(showAllEpisodes(url)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Episodes);

