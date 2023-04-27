import { BannerComment } from '@/types/banner';
import React, { useState } from 'react';
import CommentItem from './CommentItem';
import { postComment } from '@/apis/postComment';

function CommentList({
  id,
  commentList,
}: {
  id: number;
  commentList: BannerComment[] | undefined;
}) {
  const [text, setText] = useState('');
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const onSubmitComment = () => {
    postComment(text, 'test2', id);
    setText('');
  };

  return (
    <section>
      <input
        type="text"
        placeholder="댓글 입력해주세요."
        value={text}
        onChange={onChangeText}
      />
      <button onClick={onSubmitComment}>댓글 달기</button>
      {commentList?.map((comment) => (
        <CommentItem key={comment.commentId} comment={comment} />
      ))}
    </section>
  );
}

export default CommentList;
