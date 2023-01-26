import { Posts } from '../../components/Posts';
import { PostsProvider } from '../../context/PostsProvider';
import './App.css';

function App() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}

export default App;
