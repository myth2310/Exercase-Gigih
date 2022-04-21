import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import '../search/search.css';
import Gif from '../../components/Gift';



class Sample extends Component {
  constructor(props){
    super(props);
    this.state = { searchQuerry: '', searchResult: [] };
  }


  handleChange = (e) =>{
    this.setState({searchQuerry: e.target.value});
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    let apiKey = REACT_APP_GIPHY;
    let query = this.state.searchQuerry ;
    let limit = 12;
    let baseUrl = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${query}`;

    fetch(baseUrl)
    .then((res) => res.json())
    .then((res) =>{
      this.setState({ searchResult: res.data});
      console.log(this.state.searchResult);
    });
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchQuerry}
          onChange={this.handleChange}
          className="form-input"
          placeholder="Search..."
        />
        <input type="submit" className="button"/>
        <a className="link " href="https://developers.giphy.com/docs/api/endpoint/#trending">Trending</a>
      </form>
      


      {this.state.searchResult.map((data) => (
        <Gif url={data.images.fixed_width.url} key={data.id} title={data.title}/>
      ))}

     </>
    );
  } 
}

export { Sample };
