import React from "react";
import {List, Card, Rate, notification,} from 'antd';
import Button from "antd/es/button";
import {getSeasonNumber, showAllEpisodes, showSeasonEpisodes} from "../actions/actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const {Meta} = Card;

class EpisodesList extends React.Component {
  componentDidMount() {
    console.log(this.props, 'props episodlist')
  }

  render() {
    const {episodes, seasonNumber} = this.props;
    console.log(seasonNumber, 'seasonNumber episodesList')
    const listItemStyle = {
      padding: '20px'
    };
    const seasonImg1 = 'https://vokrug.tv/pic/product/3/0/f/0/30f0180a72f9a39e2a2f70ac7cde9c67.jpeg';
    const seasonImg2 = 'https://www.vokrug.tv/pic/season/6/a/d/2/6ad22b72ef9d138dfa19cf66f5a7934c.jpeg';
    const seasonImg3 = 'https://www.vokrug.tv/pic/season/6/e/d/3/6ed31155f4462dc7e162b7fa0209de66.jpeg';
    const seasonImg4 = 'https://www.vokrug.tv/pic/season/6/6/d/3/66d34099281ba993d7a710065d7fb6f7.jpeg';
    const seasonImg5 = 'https://www.vokrug.tv/pic/season/7/a/4/4/7a445f9c65496e5bf847aaac6e14016e.jpeg';
    const imgStyle = {
      width: "100%",
      overflow: 'hidden',
      height: '306px'
    };
    const buttonStyle = {
      width: '105px',
      padding: '0'
    };
    const actualSeasonEpisodes = episodes.filter(item => item.season === seasonNumber);
    console.log(actualSeasonEpisodes, 'actualSeasonEpisodes');

    return (
      <div>
        <Button type="primary">
          <Link to='/episodes'>⤶ Back</Link>
        </Button>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 5,
          }}
          dataSource={actualSeasonEpisodes}
          pagination={
            {
              position: 'bottom',
              pageSize: 12,
            }
          }
          renderItem={item => (
            <List.Item style={listItemStyle}>
              <Link to={`/episode-page/${item.episode_id}`}>
                <Card
                  hoverable
                  style={{width: 240}}
                  cover={<img alt="example" style={imgStyle} src={
                    item.season === '1' ? seasonImg1
                      : item.season === ' 1' ? seasonImg1
                      : item.season === '2' ? seasonImg2
                        : item.season === '3' ? seasonImg3
                          : item.season === '4' ? seasonImg4
                            : seasonImg5
                  }/>}
                  actions={[
                    <Button
                      type="primary"
                      style={buttonStyle}
                    >Open</Button>,
                  ]}
                >
                  <Meta title={`Season: ${item.season}, Episode: ${item.episode}`} description={item.title}/>
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  const {
    episodeReducer: {
      episodes = [],
      episodesSeason = [],
      seasonNumber = 1,
    }
  } = store;
  return {episodes, episodesSeason, seasonNumber}
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EpisodesList);

