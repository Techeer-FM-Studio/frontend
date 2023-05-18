import { TaskInfo } from '@/types/routine'

const updateTaskStatusAndTimeLeft = (
    taskInfo: TaskInfo, // TaskInfo 객체
    setTimeLeft: (timeLeft: {
        days: number
        hours: number
        minutes: number
    }) => void, // setTimeLeft 함수
    setRoutineStatus: (status: string) => void // setRoutineStatus 함수
) => {
    const currentTime = new Date().getTime() // 현재 시간(ms)
    const startAtTime = new Date(taskInfo.startAt).getTime() // 시작 시간(ms)
    const endAtTime = new Date(taskInfo.endAt).getTime() // 종료 시간(ms)
    const timeDiff = endAtTime - currentTime // 종료 시간과 현재 시간의 차이(ms)

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) // 남은 일 수 계산
    const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ) // 남은 시간 계산
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)) // 남은 분 계산

    setTimeLeft({ days, hours, minutes }) // setTimeLeft 함수를 사용하여 남은 시간 정보를 업데이트

    if (currentTime < startAtTime && !taskInfo.isFinished) {
        // 아직 시작하지 않은 경우
        setRoutineStatus('시작 전') // 루틴 상태를 '시작 전'으로 업데이트
    } else if (
        currentTime >= startAtTime &&
        currentTime < endAtTime &&
        !taskInfo.isFinished
    ) {
        // 진행 중인 경우
        setRoutineStatus('진행 중') // 루틴 상태를 '진행 중'으로 업데이트
    } else {
        // 종료된 경우
        setRoutineStatus('종료') // 루틴 상태를 '종료'로 업데이트
    }
}

export default updateTaskStatusAndTimeLeft // updateTaskStatusAndTimeLeft 함수를 모듈의 기본 내보내기로 설정
