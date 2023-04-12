import DetailTitle from '@/components/banner/detail/DetailTitle';
import Image from 'next/image';

function InfoPage() {
  const infoDataMock = {
    id: 1,
    wirter: '백이요',
    title: 'TestTitle',
    url: 'https://i.pinimg.com/564x/7f/aa/b3/7faab39193f67ff2d201a8b794d06ecd.jpg',
    startDate: '2022-10-01',
    endDate: '2022-10-31',
    createdAt: '2022-10-01',
    updatedAt: '2022-10-31',
  };
  return (
    <div>
      <DetailTitle
        wirter={infoDataMock.wirter}
        createdAt="a"
        title="s"
      ></DetailTitle>
      <div style={{ width: 300, height: 300, position: 'relative' }}>
        <Image src={infoDataMock.url} alt="이미지" fill></Image>
      </div>
      <article>
        <p>dsajfkldsjafldjklasfjdlksafkldjaldsafklk</p>
        <div>
          일정 : {infoDataMock.createdAt} ~ {infoDataMock.endDate}
        </div>
      </article>
    </div>
  );
}

export default InfoPage;
