import React from 'react';

export default class Form extends React.component {
  render() {
    return (
      <form onSubmit={this.callAPI}>
        <section>
          <input
            type="text"
            className="wide"
            name="url"
            placeholder="URL"
            value={this.props.url}
            onChange={this.handleChange}
          />

          <div id="methods">
            <label>
              <input
                type="radio"
                name="method"
                checked={this.props.method === 'get' ? true : false}
                value="get"
                onChange={this.handleChange}
              />
              <span>GET</span>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                checked={this.props.method === 'post' ? true : false}
                value="post"
                onChange={this.handleChange}
              />
              <span>POST</span>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                checked={this.props.method === 'put' ? true : false}
                value="put"
                onChange={this.handleChange}
              />
              <span>PUT</span>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                checked={this.props.method === 'patch' ? true : false}
                value="patch"
                onChange={this.handleChange}
              />
              <span>PATCH</span>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                checked={this.props.method === 'delete' ? true : false}
                value="delete"
                onChange={this.handleChange}
              />
              <span>DELETE</span>
            </label>
            <label>
              <button type="submit">Go!</button>
            </label>
          </div>
        </section>

        <section className="deck col-2">
          <div id="body">
            <textarea
              placeholder="Raw JSON Body"
              name="requestBody"
              onChange={this.handleChange}
              value={this.props.requestBody}
              disabled={
                this.props.method.match(/get|delete/) ? true : false
              }
            />
          </div>

          <div id="headers">
            <button onClick={this.toggleHeaders}>
              Headers
            </button>
            <div className={'visible-' + this.props.headersVisible}>
              <h2>Basic Authorization</h2>
              <input
                onChange={this.handleChange}
                name="username"
                placeholder="Username"
                value={this.props.username}
              />
              <input
                onChange={this.handleChange}
                name="password"
                type="password"
                placeholder="Password"
                value={this.props.password}
              />
            </div>
            <div className={'visible-' + this.props.headersVisible}>
              <h2>Bearer Token</h2>
              <input
                onChange={this.handleChange}
                type="text"
                className="wide"
                name="token"
                placeholder="Token"
                value={this.props.token}
              />
            </div>
          </div>
        </section>
      </form>
    );
  }
}
  