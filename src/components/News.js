import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'

export default class News extends Component {
  static defProps ={
    category: "general"
  }
  static PropType ={
    category: PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      load: false
    };
  }
  async componentDidMount(){
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c749271925f24eae83b999dc6e57d776&page=${this.state.page}&pageSize=9`
    this.setState({load:true})
      let data = await fetch(url);
    let procData = await data.json();
    console.log(procData);
    this.setState({
      load:false,
      articles: procData.articles,
      totalResults: procData.totalResults
    })
  }
  togglePrevious = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=c749271925f24eae83b999dc6e57d776&page=${this.state.page}&pageSize=9`;
    this.setState({ load: true });
      let data = await fetch(url);
    let procData = await data.json();
    this.setState({
      load:false,
      articles: procData.articles,
      page: this.state.page-1
    });
  }
  toggleNext = async () =>{
      console.log(1)
      this.setState({
        page: this.state.page + 1,
      });
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=c749271925f24eae83b999dc6e57d776&page=${this.state.page}&pageSize=9`;
      this.setState({ load: true });
      let data = await fetch(url);
      let procData = await data.json();
      this.setState({
        load:false,
        articles: procData.articles,
      })
  }
  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center">Top-Headlines</h1>
          <div className="row">
            {!this.state.load &&
              this.state.articles.map((el) => {
                return (
                  <div className="col-sm-4 my-4" key={el.url}>
                    <NewsItems
                      title={el.title ? el.title : "..."}
                      desc={
                        el.description ? el.description.slice(0, 88) : "..."
                      }
                      image={
                        el.urlToImage
                          ? el.urlToImage
                          : "https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                      }
                      newUrl={el.url}
                      mode={this.props.mode}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        {this.state.load && (
          <div className="text-center my-3">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div className="container d-flex justify-content-between my-5">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.togglePrevious}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              !(this.state.page + 1 <= Math.ceil(this.state.totalResults / 9))
            }
            onClick={this.toggleNext}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
