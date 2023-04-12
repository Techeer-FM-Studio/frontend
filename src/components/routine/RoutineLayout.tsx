import styles from '../../styles/components/routine/RoutineLayout.module.scss';

interface RoutineLayoutProps {
  showForm: boolean;
}

const RoutineLayout: React.FC<RoutineLayoutProps> = ({ showForm }) => {
  return (
    <div className={styles.RoutineLayout}>
      <div className={styles.RoutineLayoutTop}>ROUTINE</div>
      <div className={styles.RoutineLayoutBottom}>
        {showForm && (
          <div>
            <h3>제목</h3>
            <input type="text" />
            <h3>시작 날짜</h3>
            <input type="date" />
            <h3>종료 날짜</h3>
            <input type="date" />
            <h3>메모</h3>
            <textarea />
          </div>
        )}
      </div>
    </div>
  );
};

export default RoutineLayout;
