import BannerInfo from '@/components/banner/BannerInfo';
import BannerList from '@/components/banner/BannerList';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';

function BannerPage() {
  const router: NextRouter = useRouter();
  let { slug } = router.query;
  switch (slug) {
    case 'list':
      return <BannerList></BannerList>;
    case 'info':
      return <BannerInfo></BannerInfo>;
    default:
      return <div>not found</div>;
  }
}

export default BannerPage;
