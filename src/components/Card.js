import React, { Component } from 'react'
import Truncate from 'react-truncate';

export default class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],

    }
  }
  async componentDidMount() {
    const response = await fetch('https://www.reddit.com/r/reactjs.json')
    if (response.ok) {
      const temp = await response.json()
      const users = temp.data.children
      console.log(users)
      this.setState({ users })
    }
  }

  render() {
    return (
      <div className="row mx-auto">
        {this.state.users.map(d => (
          <div className="col-md-6 col-12">
            <div className="card border-primary mb-3" id="card">
              <div className="card-header bg-transparent border-primary font-weight-bold text-primary">{d.data.title}</div>
              <div className="card-body">
                <Truncate lines={3} ellipsis={<span>... <a href={d.data.url}>Go To Page</a></span>}>
                  {d.data.selftext_html}
                </Truncate>
              </div>
              <div className="card-footer bg-transparent border-primary"><span className="font-bold"> Score:</span> {d.data.score}</div>
            </div>
          </div>

        ))}
      </div>
    )
  }
}

