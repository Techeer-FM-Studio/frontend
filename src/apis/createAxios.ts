import axios from 'axios';

export const axiosCustom = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/v1'
      : '도메인 주소 넣기',
});
