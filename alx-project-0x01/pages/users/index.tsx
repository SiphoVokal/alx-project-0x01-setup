import React from 'react';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

type UsersPageProps = {
  posts: UserProps[]; // 'posts' comes from getStaticProps
};

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Users</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((user: UserProps) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;

