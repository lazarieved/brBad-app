import React from "react";
import {List, Card, Rate, notification,} from 'antd';
import Button from "antd/es/button";

const { Meta } = Card;

class CharactersList extends React.Component{
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
              cover={<img alt="example" style={imgStyle} src={item.img} />}
              actions={[
                <Button
                  type="primary"
                  style={buttonStyle}
                >Open</Button>,
              ]}
            >
              <Meta title={item.name} description={item.nickname} />
            </Card>
          </List.Item>
        )}
      />
    );
  }
}
export default CharactersList;
