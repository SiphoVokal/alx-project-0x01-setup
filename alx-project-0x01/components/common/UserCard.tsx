import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-800">Email: {email}</p>
      <p className="text-gray-800">Phone: {phone}</p>
      <p className="text-gray-800">Website: {website}</p>
      <p className="text-gray-800">Company: {company.name}</p>
      <p className="text-gray-500 text-sm">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
