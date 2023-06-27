import { atom } from 'recoil';

export const isLoggedInState = atom({
  key: 'isLoggedInState', // 고유한 ID (전역적으로 고유해야 함)
  default: false, // 기본값
});
