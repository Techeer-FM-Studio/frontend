import styles from '../../styles/components/routine/NextRoutineLayout.module.scss';

const NextRoutineLayout = () => {
  return (
    <div className={styles.NextRoutineLayout}>
      <div className={styles.SelectMenu}>SelectMenu</div>
      <div className={styles.RoutineInfo}>RoutineInfo</div>
      <div className={styles.TimeLeft}>TimeLeft</div>
    </div>
  );
};

export default NextRoutineLayout;
