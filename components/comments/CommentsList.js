import React, { useState } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import styled from 'styled-components';

const CommentsListContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

const CommentsHeader = styled.h3`
  color: #ffffff; /* $white */
  margin-bottom: 15px;
`;

const CommentsList = ({ comments }) => {
  const [commentsData, setCommentsData] = useState(comments);

  const addComment = (newComment) => {
    setCommentsData([...commentsData, newComment]);
  };

  const replyToComment = (replyTo, text) => {
    const updatedComments = commentsData.map((comment) => {
      if (comment.userId === replyTo.userId) {
        return {
          ...comment,
          replies: [...comment.replies, { ...replyTo, text }],
        };
      }
      return comment;
    });
    setCommentsData(updatedComments);
  };

  return (
    <CommentsListContainer>
      <CommentsHeader>Comments</CommentsHeader>
      <AddComment addComment={addComment} />
      {commentsData.map((comment) => (
        <Comment key={comment.userId} comment={comment} onReply={replyToComment} />
      ))}
    </CommentsListContainer>
  );
};

export default CommentsList;
