import { postCalender } from '@/apis/postCalender';
import { postLike } from '@/apis/postLike';
import { useState } from 'react';

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
    const data = await postLike('test1', id);
    setLike(data.isLiked);
  };

  const onChangeCalender = async () => {
    const data = await postCalender('test1', id);
    setInclude(data.isIncluded);
  };

  return (
    <section>
      <button onClick={onChangeLike} style={like ? { background: 'pink' } : {}}>
        좋아요 : {likeCnt}
      </button>
      <button onClick={onChangeCalender}>
        {include ? '이미 달력에 추가되었습니다' : '내 달력에 추가하기'}
      </button>
    </section>
  );
}

export default DetailButtons;
