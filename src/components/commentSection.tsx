import '../app/globals.css'; 
import React from "react";
import { Comment } from "../pages/api/newsData";

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">Comentários</h3>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="mt-4 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
            <p className="font-bold">{comment.name}</p>
            <p className="text-gray-700">{comment.text}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Sem comentários ainda</p>
      )}
    </div>
  );
};

export default CommentSection;
