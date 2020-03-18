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

const {Header, Content, Footer} = Layout;

class MainMenu extends React.Component {
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
                <Link to='/check_youself'>Check yourself ?</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{padding: '50px'}}>
            <Switch>
              <Route path='/' exact component={Characters}/>
              <Route path='/episodes' component={Episodes}/>
              <Route path='/check_youself' component={CheckYourSelf}/>
            </Switch>
          </Content>
          <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Router>
    );
  }
}

export default MainMenu;
