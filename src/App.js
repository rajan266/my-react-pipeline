
import './App.css';
import { useQuery } from '@tanstack/react-query';
import Child from './Child';
import { usePosts } from './usePost';


function App() {
  const {data, isPending, isError, error} = usePosts();
  if (isPending) {
    return <p>Loading.....</p>
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="App">
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Child/>
    </div>
  );
}

export default App;
