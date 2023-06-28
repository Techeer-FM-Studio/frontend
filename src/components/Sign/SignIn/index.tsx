import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';

type InputsType = {
  id: string;
  password: string;
};

function SignIn() {
  // TODO: errors에 대한 다양한 유형 처리하기 (ex) 아이디가 없는 경우, 비밀번호가 틀린 경우 등)
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
                message: '패스워드는 필수 입력항목입니다.',
              },
            })}
          ></input>
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button type="submit">로그인</button>
        <p>
          아직 회원이 아니신가요? <span>회원가입</span>
        </p>
      </form>
    </article>
  );
}

export default SignIn;
