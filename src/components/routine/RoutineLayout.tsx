// src/components/routine/RoutineLayout.tsx

import { TaskInfo } from '@/types/routine';
import styles from '../../styles/components/routine/RoutineLayout.module.scss';
import moment from 'moment';

interface RoutineLayoutProps {
  selectedTasks: TaskInfo[];
  showForm: boolean;
}

const RoutineLayout: React.FC<RoutineLayoutProps> = ({
  selectedTasks,
  showForm,
}) => {
  return (
    <div className={styles.RoutineLayout}>
      <div className={styles.RoutineLayoutTop}>ROUTINE</div>
      <div className={styles.RoutineLayoutBottom}>
        {showForm && (
          <div className={styles.RoutineAddForm}>
            <h3>제목</h3>
            <input type="text" className={styles.input} />
            <h3>시작 날짜</h3>
            <input type="date" className={styles.input} />
            <h3>종료 날짜</h3>
            <input type="date" className={styles.input} />
            <h3>메모</h3>
            <textarea className={styles.textarea} />
            <button className={styles.button}>일정 등록하기</button>
          </div>
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
