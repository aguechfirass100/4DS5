import React, { useState } from 'react';
import styled from 'styled-components';

const AddCommentContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-bottom: 20px;

  textarea {
    width: 100%;
    height: 120px; /* Height for a spacious feel */
    padding: 15px; /* Padding for better text entry */
    border: none; /* Removed border for a modern look */
    border-radius: 8px; /* Rounded corners */
    font-size: 16px;
    color: #FFFFFF; /* $dark */
    background: linear-gradient(203deg, rgba(192, 90, 255, 0.2) 0%, rgba(67, 39, 158, 0.2) 100%); /* Light gradient background */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    transition: box-shadow 0.3s, background 0.3s;

    &:focus {
      background: linear-gradient(203deg, rgba(192, 90, 255, 0.5) 0%, rgba(67, 39, 158, 0.5) 100%); /* Stronger gradient on focus */
      box-shadow: 0 0 10px rgba(132, 90, 255, 0.5); /* Glow effect on focus */
      outline: none;
    }
  }
`;

const SubmitButton = styled.button`
  margin-top: 15px; /* Spacing above the button */
  padding: 12px 20px; /* Padding for button size */
  width: 100%;
  border: none;
  border-radius: 5px;
  background: linear-gradient(250deg, rgba(255, 85, 219, 1) 24%, rgba(52, 108, 255, 1) 100%); /* Gradient background */
  color: #ffffff; /* $white */
  font-size: 18px; /* Font size */
  cursor: pointer;
  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;

  &:hover {
    background: linear-gradient(250deg, rgba(52, 108, 255, 1) 24%, rgba(0, 220, 147, 1) 100%); 
    transform: translateY(-2px); 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
  }

  &:active {
    transform: translateY(0);
  }
`;

const AddComment = ({ addComment }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const newComment = {
        fullName: 'Firass Aguech',
        userId: new Date().getTime().toString(),
        avatarUrl: 'https://icons.iconarchive.com/icons/fasticon/hand-draw-iphone/128/Photos-icon.png',
        text,
        replies: [],
        likes: 0,
      };
      addComment(newComment);
      setText('');
    }
  };

  return (
    <AddCommentContainer onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
        required
      />
      <SubmitButton type="submit">Submit</SubmitButton>
    </AddCommentContainer>
  );
};

export default AddComment;
