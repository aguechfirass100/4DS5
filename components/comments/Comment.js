import React, { useState } from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  display: flex;
  padding: 15px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

const CommentContent = styled.div`
  flex: 1;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentAuthor = styled.strong`
  color: #ffffff; /* $white */
`;

const CommentLikes = styled.span`
  cursor: pointer;
  color: #00dc93; /* $green */
`;

const CommentText = styled.p`
  margin: 5px 0;
  color: #ffffff; /* $white */
`;

const ReplyButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: linear-gradient(203deg, rgba(192, 90, 255, 1) 0%, rgba(67, 39, 158, 1) 100%); /* $gradient */
  color: #ffffff; /* $white */
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00dc93; /* $green */
  }
`;

const RepliesContainer = styled.div`
  margin-left: 20px;
  border-left: 2px solid #ffffff; /* $white */
  padding-left: 10px;
`;

const Comment = ({ comment, onReply }) => {
  const [likes, setLikes] = useState(comment.likes || 0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <CommentContainer>
      <Avatar src={comment.avatarUrl} alt={comment.fullName} />
      <CommentContent>
        <CommentHeader>
          <CommentAuthor>{comment.fullName}</CommentAuthor>
          <CommentLikes onClick={handleLike}>❤️ {likes}</CommentLikes>
        </CommentHeader>
        <CommentText>{comment.text}</CommentText>
        <ReplyButton onClick={() => onReply(comment)}>Reply</ReplyButton>
        {comment.replies.length > 0 && (
          <RepliesContainer>
            {comment.replies.map((reply) => (
              <Comment key={reply.userId} comment={reply} onReply={onReply} />
            ))}
          </RepliesContainer>
        )}
      </CommentContent>
    </CommentContainer>
  );
};

export default Comment;
