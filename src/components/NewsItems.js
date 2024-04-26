import React, { Component } from 'react';
export default class NewsItems extends Component {
  render() {
    let {title,desc,image,newUrl}= this.props;
    return (
      <div>
        <div
          className={`card bg-${this.props.mode}`}
          style={{ width: "18rem" }}
        >
          <img src={image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5
              className={`card-title text-${
                this.props.mode === "dark" ? "white" : "black"
              }`}
            >
              {title}
            </h5>
            <p className={`card-text text-${
                    this.props.mode === "dark" ? "white" : "black"
                  }`}>{desc}...</p>
            <a
              href={newUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-md btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
