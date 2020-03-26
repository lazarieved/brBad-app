import React from "react";
import {Input, Typography} from 'antd';
import Button from "antd/es/button";

const {Search} = Input;
const {Title} = Typography;

class FilterComponent extends React.Component {
  state = {
    loadingAlive: false,
    loadingDead: false,
  };
  aliveLoading = () => {
    this.setState({loadingAlive: true});
  };
  deadLoading = () => {
    this.setState({loadingDead: true});
  };

  getAliceCharacters = () => {
    const {getAliveCharacters, showAllCharacters} = this.props;
    showAllCharacters('characters');
    this.aliveLoading();
    setTimeout(() => {
      this.setState({loadingAlive: false});
      getAliveCharacters()
    }, 600)
  };
  getDeadCharacters = () => {
    const {getDeadCharacters, showAllCharacters} = this.props;
    showAllCharacters('characters');
    this.deadLoading();
    setTimeout(() => {
      this.setState({loadingDead: false});
      getDeadCharacters()
    }, 600)
  };
  getAllCharacters = () => {
    const {showAllCharacters} = this.props;
    showAllCharacters('characters');
  };

  render() {
    const {showSearchCharacters} = this.props;
    return (
      <div>
        <Search
          placeholder="input character"
          onSearch={value => showSearchCharacters(value)}
          style={{width: 200, marginBottom: '20px'}}
        />
        <br/>
        <Button type="primary" loading={this.state.loadingAlive} style={{width: 200, marginBottom: '10px'}}
                onClick={this.getAliceCharacters}> Alive </Button>
        <br/>
        <Button type="primary" loading={this.state.loadingDead} style={{width: 200, marginBottom: '10px'}}
                onClick={this.getDeadCharacters}> Dead </Button>
        <br/>
        <Button type="primary" style={{width: 200, marginBottom: '10px'}} onClick={this.getAllCharacters}> All </Button>
      </div>
    );
  }
}

export default FilterComponent;
