import React from "react";
import FilterComponent from "./FilterComponent";
import EpisodesList from "./EpisodesList";
import {showAllCharacters, showAllEpisodes} from "../actions/actions";
import {connect} from "react-redux";
import Button from "antd/es/button";
import {Link} from "react-router-dom";

class Episodes extends React.Component{
  componentDidMount() {
    this.props.showAllEpisodes('episodes');
    console.log(this.props, 'episodes props')
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
            <Button type="primary">
              <Link to='/episodes/season/1'>1 season</Link>
            </Button>
            <Button type="primary">
              <Link to='/episodes/season/2'>2 season</Link>
            </Button>
            <Button type="primary">
              <Link to='/episodes/season/3'>3 season</Link>
            </Button>
            <Button type="primary">
              <Link to='/episodes/season/4'>4 season</Link>
            </Button>
            <Button type="primary">
              <Link to='/episodes/season/5'>5 season</Link>
            </Button>
            {/*<EpisodesList episodes={episodes} />*/}
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

