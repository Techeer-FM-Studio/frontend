import { postDeleteComment } from '@/apis/postDeleteComment';
import { BannerComment } from '@/types/banner';
import React from 'react';

function CommentItem({ comment }: { comment: BannerComment }) {
  const { commentId, writer, content, startAt, updateAt } = comment;

  const deleteComment = () => {
    postDeleteComment(commentId);
  };
  return (
    <section>
      <div>commentId : {commentId}</div>
      <div>wirter:{writer}</div>
      <div>content:{content}</div>
      <div>startAt : {startAt}</div>
      <div>updateAt : {updateAt}</div>
      <button onClick={deleteComment}>댓글 삭제</button>
    </section>
  );
}

export default CommentItem;
