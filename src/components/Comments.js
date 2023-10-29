import React from 'react';
import { Comment } from './Comment';

export const Comments = ({ comments = [] }) => {
  return (
    <div className='p-6 bg-white rounded shadow mb-3'>
      <p className='font-bold mb-3'>Comments</p>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          content={comment.content}
          createdAt={comment.createdAt}
        />
      ))}
    </div>
  );
};
