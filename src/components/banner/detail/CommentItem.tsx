import { postDeleteComment } from '@/apis/postDeleteComment'
import { BannerComment } from '@/types/banner'
import React from 'react'
import styles from '../../../styles/components/banner/detail/BannerCommentItem.module.scss'
import { FiClock } from 'react-icons/fi'
import { RxPerson } from 'react-icons/rx'
function CommentItem({
    bannerId,
    commentData,
}: {
    bannerId: number
    commentData: BannerComment
}) {
    const { id, writer: writer, comments, createdAt, updatedAt } = commentData
    const date = new Date(createdAt)
    const deleteComment = () => {
        postDeleteComment(bannerId, id)
    }
    return (
        <section className={styles.container}>
            <article>
                <div>
                    <RxPerson />
                    <p>{writer}</p>
                </div>

                <div>
                    <FiClock />
                    <p>{date.toLocaleDateString()}</p>
                </div>
            </article>
            <div dangerouslySetInnerHTML={{ __html: comments }}></div>
            <button onClick={deleteComment}>댓글 삭제</button>
        </section>
    )
}

export default CommentItem
