import { useState } from 'react';
import styles from '../../../styles/components/banner/detail/BannerButton.module.scss';
function DetailButtons({
  id,
  likeCnt,
  isLiked,
  isIncluded,
}: {
  id: number;
  likeCnt: number;
  isLiked: boolean;
  isIncluded: boolean;
}) {
  const [like, setLike] = useState(isLiked);
  const [include, setInclude] = useState(isIncluded);

  const onChangeLike = async () => {
    alert('구현중입니다😅');
    //TODO: 구현 되면 주석 풀기
    // const data = await postLike('test1', id);
    // setLike(data.isLiked);
  };

  const onChangeCalender = async () => {
    alert('구현중입니다😅');
    //TODO: 구현 되면 주석 풀기
    // const data = await postCalender('test1', id);
    // setInclude(data.isIncluded);
  };

  return (
    <section className={styles.container}>
      <button
        onClick={onChangeLike}
        style={
          like
            ? { background: '#f65959', color: 'white', borderColor: '#f66969' }
            : undefined
        }
      >
        좋아요 : {likeCnt}
      </button>
      <button onClick={onChangeCalender}>
        {include ? '이미 달력에 추가되었습니다' : '내 달력에 추가하기'}
      </button>
    </section>
  );
}

export default DetailButtons;
