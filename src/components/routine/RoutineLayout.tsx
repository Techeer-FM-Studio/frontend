// src/components/routine/RoutineLayout.tsx

import { BannerTaskInfo, TaskInfo } from '@/types/routine'
import styles from '../../styles/components/routine/RoutineLayout.module.scss'
import moment from 'moment'
import { postRoutine } from '@/apis/tasks/postRoutine'
import { putRoutine } from '@/apis/tasks/putRoutine'
import { deleteRoutine } from '@/apis/tasks/deleteRoutine'

import { useEffect, useState } from 'react'

interface RoutineLayoutProps {
    selectedTasks: TaskInfo[]
    selectedBannerTasks: BannerTaskInfo[]
    showForm: boolean
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedTasks: React.Dispatch<React.SetStateAction<TaskInfo[]>>
    onUpdateSelectedTask: (updatedTask: TaskInfo) => void
    onUpdateSelectedBannerTask: (updatedBannerTask: BannerTaskInfo) => void
}

const RoutineLayout: React.FC<RoutineLayoutProps> = ({
    selectedTasks,
    selectedBannerTasks,
    showForm,
    setShowForm,
    onUpdateSelectedTask,
    setSelectedTasks,
    onUpdateSelectedBannerTask,
}) => {
    console.log('ssss', selectedTasks)
    console.log('sss', selectedBannerTasks)
    const [selectedTask, setSelectedTask] = useState<TaskInfo | null>(null)
    console.log('selectedTaskAAAAAA', selectedTask)
    const [formData, setFormData] = useState({
        title: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        memo: '',
    })
    const [isEditing, setIsEditing] = useState(false)
    console.log('formdata', formData)
    useEffect(() => {
        const startAt = new Date(
            `${formData.startDate || '2000-01-01'}T${
                formData.startTime || '00:00'
            }`
        )
        const endAt = new Date(
            `${formData.endDate || '2000-01-01'}T${formData.endTime || '00:00'}`
        )

        setFormData((prevData) => ({
            ...prevData,
            startAt: startAt.toString(),
            endAt: endAt.toString(),
        }))
    }, [
        formData.startDate,
        formData.startTime,
        formData.endDate,
        formData.endTime,
    ])

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    console.log('수정된 폼', formData)

    const handleEdit = (task: TaskInfo) => {
        setFormData({
            title: task.title,
            startDate: moment(task.startAt).format('YYYY-MM-DD'),
            startTime: moment(task.startAt).format('HH:mm'),
            endDate: moment(task.endAt).format('YYYY-MM-DD'),
            endTime: moment(task.endAt).format('HH:mm'),
            memo: task.memo,
        })

        setIsEditing(true)
        setShowForm(true)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const startAt = new Date(`${formData.startDate}T${formData.startTime}`)
        const endAt = new Date(`${formData.endDate}T${formData.endTime}`)

        const taskData: TaskInfo = {
            taskId: selectedTask?.taskId,
            title: formData.title,
            startAt: startAt.toISOString(),
            endAt: endAt.toISOString(),
            memo: formData.memo,
            isFinished: false,
        }

        const createTaskData: TaskInfo = {
            writer: 'Alice',
            title: formData.title,
            startAt: startAt.toISOString(),
            endAt: endAt.toISOString(),
            memo: formData.memo,
            isFinished: false,
            sharedMembersNicknameList: [],
        }

        if (isEditing) {
            if (selectedTask && selectedTask.taskId) {
                console.log('ok')
                putRoutine(taskData)
                    .then((updatedTask) => {
                        console.log(updatedTask)
                        console.log(
                            '일정이 성공적으로 수정되었습니다:',
                            updatedTask
                        )
                        onUpdateSelectedTask(taskData)
                        setIsEditing(false) // 수정 상태를 종료합니다.
                        setShowForm(false) // 폼을 숨깁니다.
                    })
                    .catch((error) => {
                        console.error('Error:', error)
                    })
            } else {
                console.error('Error: taskId is undefined')
            }
        } else {
            console.log('fail fail')
            console.log('ㅇㄴㅁㄹㅁㅇㄴ', createTaskData)
            postRoutine(createTaskData)
                .then((task: TaskInfo) => {
                    setSelectedTasks((pre) => [...pre, task])
                    console.log('일정이 성공적으로 등록되었습니다:', task)
                })
                .catch((error) => {
                    console.error('Error:', error)
                })
        }
    }

    const handleDelete = (task: TaskInfo) => {
        if (task.taskId !== undefined) {
            deleteRoutine(task.taskId)
                .then((deletedTask) => {
                    console.log(
                        '일정이 성공적으로 삭제되었습니다:',
                        deletedTask
                    )
                    // 여기서 필요한 경우, 삭제된 일정을 화면에서 제거하거나 상태를 업데이트하세요.
                })
                .catch((error) => {
                    console.error('Error:', error)
                })
        } else {
            console.error('Error: taskId is undefined')
        }
    }

    return (
        <div className={styles.RoutineLayout}>
            <div className={styles.RoutineLayoutTop}>ROUTINE</div>
            <div className={styles.RoutineLayoutBottom}>
                {showForm && (
                    <form
                        className={styles.RoutineAddForm}
                        onSubmit={handleSubmit}
                    >
                        <h3>제목</h3>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            className={styles.input}
                            onChange={handleChange}
                        />
                        <h3>시작 날짜</h3>
                        <input
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            className={styles.input}
                            onChange={handleChange}
                        />
                        <input
                            type="time"
                            name="startTime"
                            value={formData.startTime}
                            className={styles.input}
                            onChange={handleChange}
                        />
                        <h3>종료 날짜</h3>
                        <input
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            className={styles.input}
                            onChange={handleChange}
                        />
                        <input
                            type="time"
                            name="endTime"
                            value={formData.endTime}
                            className={styles.input}
                            onChange={handleChange}
                        />
                        <h3>메모</h3>
                        <textarea
                            name="memo"
                            value={formData.memo}
                            className={styles.textarea}
                            onChange={handleChange}
                        />
                        <button type="submit" className={styles.button}>
                            일정 등록하기
                        </button>
                    </form>
                )}

                {selectedTasks?.length > 0 ||
                selectedBannerTasks?.length > 0 ? (
                    selectedTasks.map((task, index) => {
                        const startAt = moment(task.startAt).format(
                            'YYYY년 MM월 DD일 HH시 mm분'
                        )
                        const endAt = moment(task.endAt).format(
                            'YYYY년 MM월 DD일 HH시 mm분'
                        )

                        return (
                            <div
                                key={task.taskId || index}
                                className={styles.TaskItem}
                                onClick={() => {
                                    setSelectedTask(task)
                                }}
                            >
                                <div className={styles.TaskItemTitle}>
                                    제목: {task.title}
                                </div>
                                <div className={styles.TaskItemDetails}>
                                    <div>writer: {task.writer}</div>
                                    <div>memo: {task.memo}</div>
                                    <div>시작: {startAt}</div>
                                    <div>종료: {endAt}</div>
                                    <div className={styles.TaskItemButton}>
                                        <button
                                            onClick={() => {
                                                handleEdit(task)
                                            }}
                                        >
                                            수정하기
                                        </button>
                                        <button
                                            onClick={() => handleDelete(task)}
                                        >
                                            삭제하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div>No tasks for the selected day</div>
                )}
                {selectedBannerTasks.map((bannerTask, index) => {
                    const startAt = moment(bannerTask.startAt).format(
                        'YYYY년 MM월 DD일 HH시 mm분'
                    )
                    const endAt = moment(bannerTask.endAt).format(
                        'YYYY년 MM월 DD일 HH시 mm분'
                    )

                    return (
                        <div
                            key={bannerTask.bannerId || index}
                            className={styles.TaskItem}
                        >
                            <div className={styles.TaskItemTitle}>
                                제목: {bannerTask.title}
                            </div>
                            <div className={styles.TaskItemDetails}>
                                <div>writer: {bannerTask.writer}</div>
                                <div>메모: {bannerTask.memo}</div>
                                <div>시작: {startAt}</div>
                                <div>종료: {endAt}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RoutineLayout
