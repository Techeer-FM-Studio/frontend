// src/components/routine/RoutineLayout.tsx

import { TaskInfo } from '@/types/routine';
import styles from '../../styles/components/routine/RoutineLayout.module.scss';
import moment from 'moment';
import { postRoutine } from '@/apis/tasks/postRoutine';
import { useEffect, useState } from 'react';

interface RoutineLayoutProps {
  selectedTasks: TaskInfo[];
  showForm: boolean;
}

const RoutineLayout: React.FC<RoutineLayoutProps> = ({
  selectedTasks,
  showForm,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    memo: '',
  });

  useEffect(() => {
    const startAt = new Date(
      `${formData.startDate || '2000-01-01'}T${formData.startTime || '00:00'}`
    );
    const endAt = new Date(
      `${formData.endDate || '2000-01-01'}T${formData.endTime || '00:00'}`
    );

    setFormData((prevData) => ({
      ...prevData,
      startAt: startAt.toString(),
      endAt: endAt.toString(),
    }));
  }, [
    formData.startDate,
    formData.startTime,
    formData.endDate,
    formData.endTime,
  ]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const startAt = new Date(`${formData.startDate}T${formData.startTime}`);
    const endAt = new Date(`${formData.endDate}T${formData.endTime}`);

    const taskData: TaskInfo = {
      title: formData.title,
      writer: 'Alova', // 작성자 정보를 설정해야 합니다.
      startAt: startAt.toISOString(),
      endAt: endAt.toISOString(),
      memo: formData.memo,
      isFinished: false,
      sharedMemberNicknameList: [],
    };
    postRoutine(taskData)
      .then((task) => {
        console.log('일정이 성공적으로 등록되었습니다:', task);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className={styles.RoutineLayout}>
      <div className={styles.RoutineLayoutTop}>ROUTINE</div>
      <div className={styles.RoutineLayoutBottom}>
        {showForm && (
          <form className={styles.RoutineAddForm} onSubmit={handleSubmit}>
            <h3>제목</h3>
            <input
              type="text"
              name="title"
              className={styles.input}
              onChange={handleChange}
            />
            <h3>시작 날짜</h3>
            <input
              type="date"
              name="startDate"
              className={styles.input}
              onChange={handleChange}
            />
            <input
              type="time"
              name="startTime"
              className={styles.input}
              onChange={handleChange}
            />
            <h3>종료 날짜</h3>
            <input
              type="date"
              name="endDate"
              className={styles.input}
              onChange={handleChange}
            />
            <input
              type="time"
              name="endTime"
              className={styles.input}
              onChange={handleChange}
            />
            <h3>메모</h3>
            <textarea
              name="memo"
              className={styles.textarea}
              onChange={handleChange}
            />
            <button type="submit" className={styles.button}>
              일정 등록하기
            </button>
          </form>
        )}

        {selectedTasks?.length > 0 ? (
          selectedTasks.map((task, index) => {
            const startAt = moment(task.startAt).format(
              'YYYY년 MM월 DD일 HH시 mm분'
            );
            const endAt = moment(task.endAt).format(
              'YYYY년 MM월 DD일 HH시 mm분'
            );

            return (
              <div key={task.taskId || index} className={styles.TaskItem}>
                <div className={styles.TaskItemTitle}>제목: {task.title}</div>
                <div className={styles.TaskItemDetails}>
                  <div>writer: {task.writer}</div>
                  <div>memo: {task.memo}</div>
                  <div>시작: {startAt}</div>
                  <div>종료: {endAt}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No tasks for the selected day</div>
        )}
      </div>
    </div>
  );
};

export default RoutineLayout;
