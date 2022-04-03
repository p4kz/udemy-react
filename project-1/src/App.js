import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    post: [ 
      {
        id: 1,
        title: 'o titulo 1',
        body: 'o corpo',
      },
      
      {
        id: 2,
        title: 'o titulo 2',
        body: 'o corpo 2',
      },

      {
        id: 3,
        title: 'o titulo 3',
        body: 'o corpo 3',
      }
    ]
  }

  timeoutUpdade = null

  //lifecycle methods
  componentDidMount() { // <- vai ser executado uma vez assim que o componente for carregado na tela
    this.handleTimeout()
  }

  //lifecycle methods
  componentDidUpdate() { // <- 
    this.handleTimeout()
  }

  //lifecycle methods
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdade)
  }

  handleTimeout = () => {
    const { post, counter } = this.state
    post[0].title = 'O titulo mudou'
    post[1].title = 'O titulo mudou aqui'
    post[2].title = 'O titulo mudou dnv'

    this.timeoutUpdade = setTimeout(() => {
      this.setState({ post, counter: counter + 1 })
    }, 1000)
  }
  
  render() {
    const { post, counter } = this.state

    return (

      <div className="App"> 
      <h1>{counter}</h1>       
        {post.map(post =>(
          <div key={post.id}> 
          <h1>{post.title}</h1> 
          <p>{post.body}</p>
          </div>
        ))}       
      </div>

    );
  }
}

export default App;
