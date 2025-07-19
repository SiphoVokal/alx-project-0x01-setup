import React from 'react';
import PostCard from '../../components/common/PostCard';

const PostsPage: React.FC = () => {
  const samplePosts = [
    { title: 'First Post', description: 'This is the first post description.' },
    { title: 'Second Post', description: 'Another interesting post.' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Posts</h1>
      {samplePosts.map((post, index) => (
        <PostCard key={index} title={post.title} description={post.description} />
      ))}
    </div>
  );
};

export default PostsPage;
