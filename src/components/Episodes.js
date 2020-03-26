import React from "react";
import {getSeasonNumber, showAllEpisodes, showSeasonEpisodes} from "../actions/actions";
import {connect} from "react-redux";
import Button from "antd/es/button";
import {Link} from "react-router-dom";
import '../index.css'

class Episodes extends React.Component {
  componentDidMount() {
    const {showAllEpisodes} = this.props;
    showAllEpisodes('episodes');
  }

  getSeasonNumber = (num) => () => {
    const {getSeasonNumber} = this.props;
    getSeasonNumber(num);
  };

  render() {
    const buttonStyle = {
      margin: '10px', fontSize: '18px'
    };
    const divStyle = {
      display: 'flex',
      flexDirection: 'raw'
    };

    return (
      <div>
        <div style={divStyle}>
          <div className='div-episodes'>
            <span style={buttonStyle}>Episodes:</span>
            <Button type="primary" style={buttonStyle} onClick={this.getSeasonNumber('1')}>
              <Link to='/episodes/season/1'>1 season</Link>
            </Button>
            <Button type="primary" style={buttonStyle} onClick={this.getSeasonNumber('2')}>
              <Link to='/episodes/season/2'>2 season</Link>
            </Button>
            <Button type="primary" style={buttonStyle} onClick={this.getSeasonNumber('3')}>
              <Link to='/episodes/season/3'>3 season</Link>
            </Button>
            <Button type="primary" style={buttonStyle} onClick={this.getSeasonNumber('4')}>
              <Link to='/episodes/season/4'>4 season</Link>
            </Button>
            <Button type="primary" style={buttonStyle} onClick={this.getSeasonNumber('5')}>
              <Link to='/episodes/season/5'>5 season</Link>
            </Button>
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
      episodesSeason = [],
    }
  } = store;
  return {episodes, episodesSeason}
};

const mapDispatchToProps = dispatch => {
  return {
    showAllEpisodes: url => dispatch(showAllEpisodes(url)),
    showSeasonEpisodes: num => dispatch(showSeasonEpisodes(num)),
    getSeasonNumber: num => dispatch(getSeasonNumber(num)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Episodes);

