import styles from './styles.module.scss';
import { GrView } from 'react-icons/gr';
import { RxPerson } from 'react-icons/rx';
import { AiOutlineTag } from 'react-icons/ai';
function DetailTitle({
  title,
  writer,
  readCnt,
  type,
}: {
  title: string;
  writer: string;
  readCnt: number;
  type: string;
}) {
  return (
    <section className={styles.container}>
      <div className={styles.title}>{title}</div>
      <article className={styles.info}>
        <div>
          <RxPerson /> <p>{writer}</p>
        </div>
        <div>
          <AiOutlineTag /> <p>{type}</p>
        </div>
        <div>
          <GrView /> <p>{readCnt}</p>
        </div>
      </article>
    </section>
  );
}

export default DetailTitle;
