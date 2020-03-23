import React from "react";
import '../index.css'
import { Typography } from 'antd';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {showEpisode} from "../actions/actions";
import Button from "antd/es/button";
const { Title } = Typography;

class EpisodePage extends React.Component{
  componentDidMount() {
    const {showEpisode, id} = this.props;
    showEpisode(`episodes/${id}`)
  }


  render() {
    const {episodeItem} = this.props;
    let episItem = episodeItem[0] || {};
    const seasonImg1 = 'https://vokrug.tv/pic/product/3/0/f/0/30f0180a72f9a39e2a2f70ac7cde9c67.jpeg';
    const seasonImg2 = 'https://www.vokrug.tv/pic/season/6/a/d/2/6ad22b72ef9d138dfa19cf66f5a7934c.jpeg';
    const seasonImg3 = 'https://www.vokrug.tv/pic/season/6/e/d/3/6ed31155f4462dc7e162b7fa0209de66.jpeg';
    const seasonImg4 = 'https://www.vokrug.tv/pic/season/6/6/d/3/66d34099281ba993d7a710065d7fb6f7.jpeg';
    const seasonImg5 = 'https://www.vokrug.tv/pic/season/7/a/4/4/7a445f9c65496e5bf847aaac6e14016e.jpeg';
    const imgStyle = {
      width: "70%",
      overflow: 'hidden',
      height: '306px',
    };
    console.log(episItem, 'charItem');

    return (
      <div className='container-character-page'>
        <Button type="primary">
          <Link to={`/episodes/season/${episItem.season}`}>⤶ Back</Link>
        </Button>
        <div className='left-side-character-page'>
          <img style={imgStyle} src={
            episItem.season === '1' ? seasonImg1
              : episItem.season === ' 1' ? seasonImg1
              : episItem.season === '2' ? seasonImg2
                : episItem.season === '3' ? seasonImg3
                  : episItem.season === '4' ? seasonImg4
                    : seasonImg5
          }/>
          <Title level={2}>{episItem.title}</Title>
          <Title level={3}>Season: {episItem.season}</Title>
          <Title level={3}>Episode: {episItem.episode}</Title>
        </div>
        <div className='right-side-character-page'>
          <Title> Description:</Title>
          <span className='right-side-character-page-span'>
            Date: {episItem.air_date ? episItem.air_date : 'unknown'}
          </span>
          <span className='right-side-character-page-span'>
            Characters: {episItem.characters ? episItem.characters.join(',') : 'unknown'}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store, props) => {
  const {
    episodeReducer: {
      episodeItem = [],
    }
  } = store;
  const {match: {params: {id}}} = props;
  return {episodeItem, id}
};

const mapDispatchToProps = dispatch => {
  return {
    showEpisode: url => dispatch(showEpisode(url)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EpisodePage);
