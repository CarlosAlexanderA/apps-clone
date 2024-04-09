import { Heart } from '../icons/Heart'
import { Comment } from '../icons/Comment'
import { Share } from '../icons/Share'

import styles from './styles.module.css'

export function VideoPlayerActions ({ likes = 12, comments = 12, shares = 12, hearted = false }) {
  const handleLike = () => {
    window.alert('like')
  }
  const handleComment = () => {
    window.alert('comment')
  }
  const handleShare = () => {
    window.alert('share')
  }

  return (
    <aside className={styles.actions}>
      <button onClick={handleLike} className={styles.action}>
        <Heart size={45} />
        <span title='like'>{likes}</span>
      </button>
      <button onClick={handleComment} className={styles.action}>
        <Comment size={45} />
        <span title='comments'>{comments}</span>
      </button>
      <button onClick={handleShare} className={styles.action}>
        <Share size={45} />
        <span title='shares'>{shares}</span>
      </button>
    </aside>
  )
}
