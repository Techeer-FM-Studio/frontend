import React from 'react';
import styles from './styles.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';

type SignUpPropsType = {
  setIsSginUp: React.Dispatch<React.SetStateAction<boolean>>;
};

type InputsType = {
  nickname: string;
  id: string;
  password: string;
  passwordCheck: string;
};

function SignUp({ setIsSginUp }: SignUpPropsType) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsType>();

  const onSubmit: SubmitHandler<InputsType> = async (data: InputsType) => {
    console.info(data);
    // TODO: 실제 로그인 로직을 수행하고, 서버로부터 JWT 토큰을 받는다.
  };

  return (
    <article className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            type="text"
            defaultValue={watch('nickname')}
            placeholder={'닉네임을 입력하세요.'}
            {...register('nickname', {
              required: {
                value: true,
                message: '닉네임은 필수 입력항목입니다.',
              },
            })}
          ></input>
          {errors.nickname && <span>{errors.nickname.message}</span>}
        </div>

        <div>
          <label htmlFor="id">아이디</label>
          <input
            id="id"
            type="text"
            defaultValue={watch('id')}
            placeholder={'아이디를 입력하세요.'}
            {...register('id', {
              required: {
                value: true,
                message: '아이디는 필수 입력항목입니다.',
              },
            })}
          ></input>
          {errors.id && <span>{errors.id.message}</span>}
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            defaultValue={watch('password')}
            placeholder={'비밀번호를 입력하세요.'}
            {...register('password', {
              required: {
                value: true,
                message: '비밀번호는 필수 입력항목입니다.',
              },
            })}
          ></input>
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div>
          <label htmlFor="passwordCheck">비밀번호 재확인</label>
          <input
            id="passwordCheck"
            type="password"
            defaultValue={watch('passwordCheck')}
            placeholder={'비밀번호 재입력하세요.'}
            {...register('passwordCheck', {
              required: {
                value: true,
                message: '비밀번호 재확인은 필수 입력항목입니다.',
              },
            })}
          ></input>
          {errors.passwordCheck && <span>{errors.passwordCheck.message}</span>}
        </div>

        <button type="submit">회원가입</button>
        <p>
          아이디가 기억나셨나요?{' '}
          <span
            onClick={() => {
              setIsSginUp((pre) => !pre);
            }}
          >
            로그인
          </span>
        </p>
      </form>
    </article>
  );
}

export default SignUp;
