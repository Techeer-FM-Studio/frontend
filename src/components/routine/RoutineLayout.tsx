import { TaskInfo } from '@/types/routine';
import styles from '../../styles/components/routine/RoutineLayout.module.scss';

interface RoutineLayoutProps {
  selectedTasks: TaskInfo[];
}

const RoutineLayout = ({ selectedTasks }: RoutineLayoutProps) => {
  return (
    <div className={styles.RoutineLayout}>
      <div className={styles.RoutineLayoutTop}>ROUTINE</div>
      <div className={styles.RoutineLayoutBottom}>
        {selectedTasks?.length > 0 ? (
          selectedTasks.map((task) => (
            <div key={task.taskId} className={styles.TaskItem}>
              {task.title}
            </div>
          ))
        ) : (
          <div>No tasks for the selected day</div>
        )}
      </div>
    </div>
  );
};

export default RoutineLayout;
