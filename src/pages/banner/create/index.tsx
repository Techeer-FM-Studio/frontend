import React, { ChangeEvent, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import DOMPurify from 'dompurify';
import Header from '@/components/common/Header';
import styles from '@/styles/pages/BannerCreatePage.module.scss';
import { postImages } from '@/apis/postImages';
import { postBannerInfo } from '@/apis/postBannerInfo';
import { useRouter } from 'next/router';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
      [
        {
          color: [
            '#000000',
            '#e60000',
            '#ff9900',
            '#ffff00',
            '#008a00',
            '#0066cc',
            '#9933ff',
            '#ffffff',
            '#facccc',
            '#ffebcc',
            '#ffffcc',
            '#cce8cc',
            '#cce0f5',
            '#ebd6ff',
            '#bbbbbb',
            '#f06666',
            '#ffc266',
            '#ffff66',
            '#66b966',
            '#66a3e0',
            '#c285ff',
            '#888888',
            '#a10000',
            '#b26b00',
            '#b2b200',
            '#006100',
            '#0047b2',
            '#6b24b2',
            '#444444',
            '#5c0000',
            '#663d00',
            '#666600',
            '#003700',
            '#002966',
            '#3d1466',
            'custom-color',
          ],
        },
        { background: [] },
      ],
      ['image', 'video'],
      ['clean'],
    ],
  },
};

function CreatePage() {
  const [bannerInfo, setBannerInfo] = useState({
    nickname: '',
    title: '',
    memo: '',
    startedAt: '',
    endAt: '',
    imageUrl: [''],
  });
  const [files, setFiles] = useState<FileList | undefined>();

  const onChangeMemo = (value: string) => {
    setBannerInfo((pre) => ({ ...pre, memo: value }));
  };

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList !== null) {
      setFiles(fileList);
    }
  };

  const router = useRouter();

  const onChangeBannerInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBannerInfo((pre) => ({ ...pre, [name]: value }));
  };

  const upload = async () => {
    await postImages(files).then((res) =>
      setBannerInfo((pre) => ({ ...pre, imageUrl: [res] }))
    );
    await postBannerInfo(bannerInfo);
    router.push('/banner/list/1?size=6');
  };

  return (
    <section className={styles.page}>
      <Header></Header>
      <div>제목</div>
      <input
        name="title"
        type="text"
        placeholder="입력해주세요"
        onChange={onChangeBannerInfo}
      />
      <div>배너 사진</div>
      <input type="file" accept="image/*" onChange={onChangeFiles} />
      <div>일정</div>
      <div>시작</div>
      <input
        name="startedAt"
        type="datetime-local"
        required
        onChange={onChangeBannerInfo}
      ></input>
      <div>종료</div>
      <input
        name="endAt"
        type="datetime-local"
        required
        onChange={onChangeBannerInfo}
      ></input>

      <ReactQuill
        className={styles['quill']}
        theme="snow"
        onChange={onChangeMemo}
        modules={modules}
      ></ReactQuill>
      {process.browser ? (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(bannerInfo.memo),
          }}
        />
      ) : (
        <div></div>
      )}
      <button onClick={upload}>저장하기</button>
    </section>
  );
}

export default CreatePage;
