import { DetailType } from '@/types/detail';

function DetailTitle({ title, wirter, createdAt }: DetailType) {
  return (
    <section>
      <div>{title}</div>
      <article>
        <div>작성자 : {wirter}</div>
        <div>생성일 : {createdAt}</div>
      </article>
    </section>
  );
}

export default DetailTitle;
