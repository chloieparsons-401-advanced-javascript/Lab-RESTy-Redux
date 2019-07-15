import React from 'react';
import ReactJson from 'react-json-view';

export default class Clipboard extends React.component {
  render() {
    return (    
      <div id="json">
        <ReactJson
          name="Headers"
          enableClipboard={false}
          collapsed={true}
          src={this.state.header}
        />
        <ReactJson
          name="Response"
          enableClipboard={false}
          collapsed={false}
          src={this.state.body}
        />
      </div>
    );
  }
}
