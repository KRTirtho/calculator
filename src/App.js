import React from 'react';
import './App.css';

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'


// const fetchQuote = fetch()

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: [],
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
         data: json,
         bgPosition: "0%"
       })
       console.log(json)
     }).catch(err=> console.log('Failed to load data from'+url+err))
  }
  handleClick(){
    fetch(url)
     .then(res=> res.json())
     .then(json =>{
       this.setState({
         loaded : true,
         data: json
       })
       console.clear()
       console.log(json)
     }).catch(err=> console.error(err+' from '+url))
  }

  render(){
    var {loaded, data} = this.state
    if(!loaded){
      return (
        <div id="loading">Loading</div>
      )
    }
    else{
      return (
        <div className="bg" >
          <div id="quote-box">
              {data[0].characterDirection==="Left"?<img style={{float:"left",maxWidth: 200, maxHeight: 200}} src={data[0].image}/>:<img style={{float:"right",maxWidth: 200, maxHeight: 200}} src={data[0].image}/>}
              <p id="text">{data[0].quote}</p>
              <p id="author">-{data[0].character}</p>
              <button className="twitter"><a id="tweet-quote" target="_blank" href="https://twitter.com/intent/tweet"><i className="fab fa-twitter"></i></a></button>
              <button id="new-quote" onClick={this.handleClick}>FeedMeMore</button>
          </div>
        </div>
      )
    }
  }
}

export default App;

