// src/components/routine/RoutineLayout.tsx

import { TaskInfo } from '@/types/routine';
import styles from '../../styles/components/routine/RoutineLayout.module.scss';
import moment from 'moment';
import { postRoutine } from '@/apis/tasks/postRoutine';

interface RoutineLayoutProps {
  selectedTasks: TaskInfo[];
  showForm: boolean;
}

const RoutineLayout: React.FC<RoutineLayoutProps> = ({
  selectedTasks,
  showForm,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event);
    const form = event.currentTarget as HTMLFormElement;
    console.log(form);
    const titleInput = form.querySelector<HTMLInputElement>(
      'input[name="title"]'
    );
    const startDateInput = form.querySelector<HTMLInputElement>(
      'input[name="startDate"]'
    );
    const startTimeInput = form.querySelector<HTMLInputElement>(
      'input[name="startTime"]'
    );
    const endDateInput = form.querySelector<HTMLInputElement>(
      'input[name="endDate"]'
    );
    const endTimeInput = form.querySelector<HTMLInputElement>(
      'input[name="endTime"]'
    );
    const memoInput = form.querySelector<HTMLTextAreaElement>(
      'textarea[name="memo"]'
    );

    const startAt = new Date(
      `${startDateInput?.value || '2000-01-01'}T${
        startTimeInput?.value || '00:00'
      }`
    );
    const endAt = new Date(
      `${endDateInput?.value || '2000-01-01'}T${endTimeInput?.value || '00:00'}`
    );

    const taskData: TaskInfo = {
      title: titleInput?.value || '',
      writer: 'Alova', // 작성자 정보를 설정해야 합니다.
      startAt: startAt.toString(),
      endAt: endAt.toString(),
      memo: memoInput?.value || '',
      isFinished: false,
      sharedMemberNicknameList: [],
    };
    console.log(taskData);

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
            <input type="text" name="title" className={styles.input} />
            <h3>시작 날짜</h3>
            <input type="date" name="startDate" className={styles.input} />
            <input type="time" name="startTime" className={styles.input} />
            <h3>종료 날짜</h3>
            <input type="date" name="endDate" className={styles.input} />
            <input type="time" name="endTime" className={styles.input} />
            <h3>메모</h3>
            <textarea name="memo" className={styles.textarea} />
            <button
              type="submit"
              className={styles.button}
              onClick={handleSubmit}
            >
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
