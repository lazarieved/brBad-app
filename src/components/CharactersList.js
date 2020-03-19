import React from "react";
import {List, Card, Rate, notification,} from 'antd';
import Button from "antd/es/button";
import {Link} from "react-router-dom";

const { Meta } = Card;

class CharactersList extends React.Component{
  showCharacter = (item) => () =>{
    this.props.showCharacter(`characters/${item}`)
  };
  render() {
    const {characters} = this.props;
    const listItemStyle = {
      padding: '20px'
    };
    const imgStyle = {
      width: "100%",
      overflow: 'hidden',
      height: '306px'
    };
    const buttonStyle = {
      width: '105px',
      padding: '0'
    };

    return (
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
        dataSource={characters}
        pagination={
          {
            position: 'bottom',
            pageSize: 12,
          }
        }
        renderItem={item => (
          <List.Item style={listItemStyle}>
            <Card
              hoverable
              style={{ width: 240}}
              cover={
                <Link to='/character-page'>
                  <img alt="example" style={imgStyle} src={item.img} />
                </Link>}
              actions={[
                <Button
                  type="primary"
                  style={buttonStyle}
                  onClick={this.showCharacter(item.char_id)}
                >
                  <Link to='/character-page'>Open</Link>
                </Button>,
              ]}
            >
              <Link to='/character-page'>
                <Meta title={item.name} description={item.nickname} />
              </Link>
            </Card>
          </List.Item>
        )}
      />
    );
  }
}
export default CharactersList;
