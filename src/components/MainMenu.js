import React from "react";
import {Layout, Menu} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import '../index.css';
import "antd/dist/antd.css";
import Episodes from "./Episodes";
import CheckYourSelf from "./CheckYourSelf";
import Characters from "./Characters";
import EpisodesList from "./EpisodesList";
import {connect} from "react-redux";
import CharacterPage from "./CharacterPage";
import EpisodePage from "./EpisodePage";

const {Header, Content, Footer} = Layout;

class MainMenu extends React.Component {

  render() {
    const menuStyle = {
      lineHeight: '64px'
    };
    const contentStyle = {
      padding: '50px',
      minHeight: '802px'
    };
    const footerStyle = {
      textAlign: 'center'
    };

    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              style={menuStyle}
            >
              <Menu.Item key="1">
                <Link to='/'>Characters</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to='/episodes'>Episodes</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to='/check-yourself'>Check yourself ?</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={contentStyle}>
            <Switch>
              <Route path='/' exact component={Characters} />
              <Route path='/episodes/season/1' component={EpisodesList} />
              <Route path='/episodes/season/2' component={EpisodesList} />
              <Route path='/episodes/season/3' component={EpisodesList} />
              <Route path='/episodes/season/4' component={EpisodesList} />
              <Route path='/episodes/season/5' component={EpisodesList} />
              <Route path='/episodes' component={Episodes} />
              <Route path='/check-yourself/:id' component={CheckYourSelf} />
              <Route path='/check-yourself' component={CheckYourSelf} />
              <Route path='/character-page/:id' component={CharacterPage} />
              <Route path='/episode-page/:id' component={EpisodePage} />
            </Switch>
          </Content>
          <Footer style={footerStyle} />
        </Layout>
      </Router>
    );
  }
}


const mapStateToProps = store => {
  const {
    charactersReducer: {
      characters = [],
      episodes = [],
    }
  } = store;
  return {characters, episodes}
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainMenu);
