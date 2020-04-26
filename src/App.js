import React from 'react';
import './App.css';

const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
const urlImg = 'https://thesimpsonsquoteapi.glitch.me/quotes'

// const fetchQuote = fetch()

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: [],
      loaded: false,
      updateData: null,
      imgData: [],
      imgPos: [],
      loaded: false
    }
    this.handleClick = this.handleClick.bind(this)
  }  

  componentDidMount(){
     fetch(url)
     .then(res=> res.json())
     .then(json =>{
       this.setState({
         loaded : true,
         data: json.quotes
       })
     }).catch(err=> console.error(err +' from '+url+err));
     fetch(urlImg)
     .then(res=> res.json())
     .then(json =>{
       this.setState({
         loadedImg : true,
         imgData: json[0].image,
         imgPos: json[0].characterDirection
       })
     }).catch(err=> console.error('Failed to load image from'+urlImg+err))
  }
  handleClick(){
    const randomNumb = Math.floor(Math.random() * this.state.data.length)
    const newQuote = this.state.data[randomNumb]
    fetch(urlImg)
     .then(res=> res.json())
     .then(json =>{
       this.setState({
         loadedImg : true,
         imgData: json[0].image,
         updateData: newQuote,
         imgPos: json[0].characterDirection
       })
     }).catch(err=> console.error('Failed to load image from'+urlImg+err))
  }

  render(){
    var {loaded, data, loadedImg} = this.state
    if(!loaded && !loadedImg){
      return (
        <div id="loading">Loading</div>
      )
    }
    else{
      return (
        <div className="bg" >
          <div id="quote-box">
              {this.state.imgPos === 'Right'?<img style={{float:'right', maxWidth: 200, maxHeight: 200}} src={this.state.imgData}/>:<img style={{float:'left', maxWidth: 200, maxHeight: 200}} src={this.state.imgData}/>}
              {this.state.updateData===null?<p id="text">{this.state.data[0].quote}</p>:<p id="text">{this.state.updateData.quote}</p>}
              {this.state.updateData===null?<p id="author">-{this.state.data[0].author}</p>:<p id="author">-{this.state.updateData.author}</p>}
              <button className="twitter"><a id="tweet-quote" target="_blank" href="https://twitter.com/intent/tweet"><i className="fab fa-twitter"></i></a></button>
              <button id="new-quote" onClick={this.handleClick}>FeedMeMore</button>
          </div>
        </div>
      )
    }
  }
}

export default App;

