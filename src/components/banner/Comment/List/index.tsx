import { BannerCommentPageableType } from '@/types/banner';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { getComments, postComment } from '@/apis/comment';
import CommentItem from '../Item';

function CommentList({ id }: { id: number }) {
  const [text, setText] = useState('');
  const [commentList, setCommentList] = useState<BannerCommentPageableType>();
  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const onSubmitComment = () => {
    postComment(text, 'test1', id);
    setText('');
  };

  useEffect(() => {
    getComments(id, 0, 6).then((res) => setCommentList({ ...res }));
  }, [id]);

  return (
    <section className={styles.container}>
      <article>
        <div>{commentList?.content.length}개의 댓글</div>
        <textarea
          placeholder="댓글 입력해주세요."
          value={text}
          onChange={onChangeText}
        />
        <button onClick={onSubmitComment}>댓글 달기</button>
      </article>

      {commentList?.content.map((comment) => (
        <CommentItem key={comment.id} bannerId={id} commentData={comment} />
      ))}
    </section>
  );
}

export default CommentList;
