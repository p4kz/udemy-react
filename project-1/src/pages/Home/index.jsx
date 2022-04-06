import { Component } from 'react';
import './styles.css';

import { Posts } from '../../components/Posts'
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button';

class Home extends Component {
  
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 3
  }

  componentDidMount() { 
    this.loadPosts()
  }
  
  loadPosts = async () => {
    const { page, postPerPage } = this.state
    const postAndPhotos = await loadPosts()

    this.setState({ 
      posts: postAndPhotos.slice(page, postPerPage), 
      allPosts: postAndPhotos 
    })
  }

  loadMorePost = () => {
    const {
      page,
      postPerPage,
      allPosts,
      posts
    } = this.state

    const nextPage = page + postPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)
    posts.push(...nextPosts)

    this.setState({posts, page: nextPage })
  }

  render() {
    const { posts, page, postPerPage, allPosts } = this.state
    const noMorePosts = page + postPerPage >= allPosts.length

    return (

      <section className='container'>
        <Posts posts={ posts } />

        <div className='button-container'>
          <Button 
            text='load more post'
            onClick={this.loadMorePost}
            disabled={noMorePosts}
          />
        </div>

      </section>

    )
  }
}

export default Home;
