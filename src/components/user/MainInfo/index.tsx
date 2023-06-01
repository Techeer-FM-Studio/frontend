import Image from 'next/image';

// Design file
import styles from './styles.module.scss';

// Temp Image
import InfoImage from '/public/temp_images/UserInfoTempImage.png';

const UserMainInfo = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Top}>
        <div className={styles.ProfileImage}>
          <Image
            src={InfoImage}
            alt="Info Image"
            className={styles.ProfileImage}
            priority={true}
          />
        </div>
        <div className={styles.UserStatus}>
          <div className={styles.StatusItem}>
            게시글
            <br />
            7859
          </div>
          <div className={styles.StatusItem}>
            완료 일정
            <br />
            123
          </div>
          <div className={styles.StatusItem}>
            현재 상태
            <br />
            한가함
          </div>
        </div>
        <div className={styles.Share}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className={styles.Mid}>
        <div className={styles.OneLineIntro}>
          세상을 바꾸는 개발자들의 모임, FM Studio
        </div>
        <div className={styles.DetailedIntro}>
          FM Studio는 Four Man Studio의 약어로, 현재 HQRoutine을 개발중인
          팀입니다. 총 4인 구성에 많은 것들을 시도해보고 있는 팀으로 프로젝트의
          미래가 창창하다고 볼 수 있습니다. 이 이후에 읽고계신 글은 스크롤을
          넘기기 위해서 하고 있는 것으로 생각보다 좋은 결과를 낼 수 있을 것으로
          보입니다 과연 어떻게 끝날 지 궁금한 이 순간에 저는 지금부터 글을
          늘려보도록 하겠습니다 늘려보도록 하겠습니다늘려보도록
          하겠습니다늘려보도록 하겠습니다 늘려보도록 하겠습니다늘려보도록
          하겠습니다늘려보도록 하겠습니다늘려보도록 하겠습니다
        </div>
      </div>
      <div className={styles.Bot}>
        <div className={styles.InterestsTitle}>관심분야</div>
        <div className={styles.InterestsList}>
          <div className={styles.ListItem}>관심분야1</div>
          <div className={styles.ListItem}>관심분야2</div>
          <div className={styles.ListItem}>관심분야3</div>
        </div>
      </div>
    </div>
  );
};

export default UserMainInfo;
