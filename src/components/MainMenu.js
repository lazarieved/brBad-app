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
  componentDidMount() {
    console.log(this.props, 'mainmenu props')
  }

  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo"/>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{lineHeight: '64px'}}
            >
              <Menu.Item key="1">
                <Link to='/'>Characters</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to='/episodes'>Episodes</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to='/check_yourself'>Check yourself ?</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{padding: '50px'}}>
            <Switch>
              <Route path='/' exact component={Characters}/>
              <Route path='/episodes/season/1' component={EpisodesList}/>
              <Route path='/episodes/season/2' component={EpisodesList}/>
              <Route path='/episodes/season/3' component={EpisodesList}/>
              <Route path='/episodes/season/4' component={EpisodesList}/>
              <Route path='/episodes/season/5' component={EpisodesList}/>
              <Route path='/episodes' component={Episodes}/>
              <Route path='/check_yourself' component={CheckYourSelf}/>
              <Route path='/character-page/:id' component={CharacterPage}/>
              <Route path='/episode-page/:id' component={EpisodePage}/>
            </Switch>
          </Content>
          <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
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

