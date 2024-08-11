import React from 'react';

export const Post = ({ post }) => {
  return (
    <div className="post">
      <h3>
        {post.id}: {post.title}
      </h3>
      <div>{post.body}</div>
      <div className="comments">
        {post.comments?.map((comment) => (
          <div key={comment.id}>
            <div>
              {comment.postId}: {comment.name}
            </div>
            <div>{comment.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
