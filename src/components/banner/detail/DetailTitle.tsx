function DetailTitle({
  title,
  owner,
  readCnt,
  type,
}: {
  title: string;
  owner: string;
  readCnt: number;
  type: string;
}) {
  return (
    <section>
      <div>{title}</div>
      <article>
        <div>type : {type}</div>
        <div>작성자 : {owner}</div>
        <div>조회수 : {readCnt}</div>
      </article>
    </section>
  );
}

export default DetailTitle;
