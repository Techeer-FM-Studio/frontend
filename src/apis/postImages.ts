import { axiosCustom } from './createAxios';

export async function postImages(files: FileList | any) {
  if (files === undefined)
    return {
      imageUrl:
        'https://i.pinimg.com/564x/92/6a/44/926a44c38c195bdabb29bea6bbdc1724.jpg',
    };

  const formData = new FormData();

  Array.from(files).forEach((el: any) => {
    // 노션에 나와있는 키값
    console.log('files', el);
    formData.append('image', el);
  });

  for (const value of formData) {
    console.log(value);
  }

  return await axiosCustom
    .post('banners/images', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}
