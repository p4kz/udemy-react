import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    post: [ // <- hard coding 
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
  
  render() {
    const { post } = this.state

    return (
      <div className="App">        
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
