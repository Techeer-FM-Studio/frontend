import Image from 'next/image';
import React from 'react';
type PropsType = {
  item: {
    url: string;
    writer: string;
    veiws: number;
    like: number;
  };
};

function BannerItem({ item: { url, like, veiws, writer } }: PropsType) {
  console.log();
  return (
    <>
      <div>
        <Image alt="photo" width={200} height={100} src={url}></Image>
      </div>
      <div>
        <div>작성자 : {writer}</div>
        <div>조회수 : {veiws}</div>
        <div>좋아요 : {like}</div>
      </div>
    </>
  );
}

export default BannerItem;
