import axios from 'axios';

const axiosCustom = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : '도메인 주소 넣기',
});
