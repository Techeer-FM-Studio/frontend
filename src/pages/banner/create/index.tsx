import React, { ChangeEvent, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import styles from './styles.module.scss';
import { postImages } from '@/apis/postImages';
import { postBannerInfo } from '@/apis/postBannerInfo';
import { useRouter } from 'next/router';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FcCancel } from 'react-icons/fc';
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
      // ['image', 'video'],
      ['clean'],
    ],
  },
};

type bannerInfoType = {
  nickname: string;
  title: string;
  memo: string;
  startedAt: string;
  endAt: string;
  imageUrl: string[];
};

function CreatePage() {
  const [bannerInfo, setBannerInfo] = useState<bannerInfoType>({
    nickname: 'test3',
    title: '',
    memo: '',
    startedAt: '',
    endAt: '',
    imageUrl: [],
  });
  //TODO: any 부분 해결하기
  const [files, setFiles] = useState<FileList | any>();

  const onChangeMemo = (value: string) => {
    setBannerInfo((pre) => ({ ...pre, memo: value }));
  };

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    console.log(fileList);
    //TODO: any 부분 해결하기
    setFiles(fileList);
  };

  const router = useRouter();

  const onChangeBannerInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBannerInfo((pre) => ({ ...pre, [name]: value }));
  };

  const upload = async () => {
    const url = await postImages(files).then((res) => {
      console.log(res);
      setBannerInfo((pre) => ({ ...pre, imageUrl: [res.url] }));
      return res.url;
    });
    await postBannerInfo({ ...bannerInfo, imageUrl: [url] });
    router.push('/banner/list/1?size=6');
  };

  return (
    <section className={styles.page}>
      <article>
        <input
          className={styles.title}
          type="text"
          name="title"
          placeholder="제목을 입력하세요"
          onChange={onChangeBannerInfo}
        />
      </article>
      <div className={styles.line}></div>

      <div>기간을 정해주세요</div>
      <article className={styles.date}>
        <div>시작</div>
        <input
          name="startedAt"
          type="datetime-local"
          required
          onChange={onChangeBannerInfo}
        ></input>
        <div>마감</div>
        <input
          name="endAt"
          type="datetime-local"
          required
          onChange={onChangeBannerInfo}
        ></input>
      </article>
      <article className={styles.fileContainer}>
        <label htmlFor="file">
          <div className={styles.file}>썸네일 업로드하기</div>
        </label>
        <input
          className={styles.fileNone}
          type="file"
          name="file"
          id="file"
          accept="image/*"
          onChange={onChangeFiles}
        />
        {files ? <AiOutlineCheckCircle /> : <FcCancel />}
      </article>

      <ReactQuill
        className={styles.quill}
        theme="snow"
        onChange={onChangeMemo}
        modules={modules}
        placeholder="공유하고 싶은 일정을 적어주세요.."
      ></ReactQuill>

      <button onClick={upload}>저장하기</button>
    </section>
  );
}

export default CreatePage;
