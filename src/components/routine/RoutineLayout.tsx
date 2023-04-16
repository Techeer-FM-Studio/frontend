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
      </div>
    </div>
  );
};

export default RoutineLayout;
