import React from "react";

class CheckYourSelf extends React.Component{
  render() {
    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'raw'}}>
          <div className='filter' style={{
            width: '300px',
            height: '800px',
            background: '#fff', padding: 24,
            marginRight: '20px'
          }}>

          </div>
          <div style={{background: '#fff', padding: 24, minHeight: 280, width: '100%'}}>
            <span>Check YOURSELF?</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckYourSelf;
