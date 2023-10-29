import React from 'react';

export const CommentForm = () => {
  return (
    <div className='p-6 bg-white rounded shadow'>
      <p className='font-bold mb-3'>Add New Comment</p>
      <form className="border p-3 rounded flex flex-col w-1/2">
        <div className="mb-1">
          <label htmlFor='name' className="text-sm font-semibold">Name</label>
          <input type='text' name='name' id="name" className="border w-full"/>
        </div>
        <div className="mb-1">
          <label htmlFor='content' className="text-sm font-semibold">Comment</label>
          <textarea name='content' id="content" className="border w-full h-20"/>
        </div>
        <button type='submit' className='bg-black text-white p-1 rounded'>Add</button>
      </form>
    </div>
  );
};
