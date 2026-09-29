import React from "react";
import { useQuery } from '@tanstack/react-query';
import { usePosts } from "./usePost";

function Child(){
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
    </div>
  );
}
export default Child