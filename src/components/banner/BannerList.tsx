import React from 'react';
import BannerItem from './BannerItem';

function BannerList() {
  return (
    <div>
      <BannerItem
        item={{
          url: 'https://i.pinimg.com/564x/62/cd/fa/62cdfaba81ec4a1035af0476bb3d57b5.jpg',
          like: 29,
          veiws: 40,
          writer: '전종훈',
        }}
      ></BannerItem>
      <BannerItem
        item={{
          url: 'https://i.pinimg.com/564x/62/cd/fa/62cdfaba81ec4a1035af0476bb3d57b5.jpg',
          like: 29,
          veiws: 40,
          writer: '전종훈',
        }}
      ></BannerItem>
    </div>
  );
}

export default BannerList;
