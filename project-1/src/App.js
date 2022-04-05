import { Component } from 'react';
import './App.css';

import { Posts } from './components/Posts'
import { loadPosts } from './utils/load-posts'

class App extends Component {
  
  state = {
    posts: []
  }

  componentDidMount() { 
    this.loadPosts()
  }
  
  loadPosts = async () => {
    const postAndPhotos = await loadPosts()
    this.setState({ posts: postAndPhotos })
  }

  render() {
    const { posts } = this.state

    return (
      <section className='container'>
        <Posts posts={ posts } />
      </section>      
    )
  }
}

export default App;
