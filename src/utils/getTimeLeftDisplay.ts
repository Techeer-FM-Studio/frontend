const getTimeLeftDisplay = (timeLeft: {
    days: number
    hours: number
    minutes: number
}) => {
    let display = '' // 빈 문자열 생성
    if (timeLeft.days > 0) {
        // 남은 일 수가 0보다 큰 경우
        display += `${timeLeft.days}일 ` // display 문자열에 `${timeLeft.days}일 ` 추가
    }
    if (timeLeft.hours > 0) {
        // 남은 시간이 0보다 큰 경우
        display += `${timeLeft.hours}시간 ` // display 문자열에 `${timeLeft.hours}시간 ` 추가
    }
    display += `${timeLeft.minutes}분` // display 문자열에 `${timeLeft.minutes}분` 추가
    return display // display 문자열 반환
}

export default getTimeLeftDisplay // getTimeLeftDisplay 함수를 모듈의 기본 내보내기로 설정
