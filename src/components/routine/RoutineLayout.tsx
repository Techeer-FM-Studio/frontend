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

    const form = event.currentTarget as HTMLFormElement;
    const titleInput = form.elements.namedItem('title') as HTMLInputElement;
    const startDateInput = form.elements.namedItem(
      'startDate'
    ) as HTMLInputElement;
    const startTimeInput = form.elements.namedItem(
      'startTime'
    ) as HTMLInputElement;
    const endDateInput = form.elements.namedItem('endDate') as HTMLInputElement;
    const endTimeInput = form.elements.namedItem('endTime') as HTMLInputElement;
    const memoInput = form.elements.namedItem('memo') as HTMLTextAreaElement;

    const startAt = new Date(`${startDateInput.value}T${startTimeInput.value}`);
    const endAt = new Date(`${endDateInput.value}T${endTimeInput.value}`);

    const taskData: TaskInfo = {
      taskId: 0,
      title: titleInput.value,
      writer: 'Alova', // 작성자 정보를 설정해야 합니다.
      startAt: startAt.toISOString(),
      endAt: endAt.toISOString(),
      memo: memoInput.value,
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
            <input type="text" className={styles.input} />
            <h3>시작 날짜</h3>
            <input type="date" className={styles.input} />
            <input type="time" className={styles.input} />
            <h3>종료 날짜</h3>
            <input type="date" className={styles.input} />
            <input type="time" className={styles.input} />
            <h3>메모</h3>
            <textarea className={styles.textarea} />
            <button className={styles.button} onClick={handleSubmit}>
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
