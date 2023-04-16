import { axiosCustom } from './createAxios';

export async function postImages(files: FileList | any) {
  const formData = new FormData();

  Array.from(files).forEach((el: any) => {
    formData.append('userfile', el);
  });

  for (const value of formData) {
    console.log(value);
  }

  return await axiosCustom
    .post('images', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => res.data);
}
