import { useRef, useState } from 'react'
import styles from './styles.module.css'
import { clsx } from 'clsx'
import { VideoPlayerActions } from './VideoPlayerActions'
import { VideoDescription } from '../VideoDescription'

export default function VideoPlayer ({ author, albumCover, description, src }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const handlePlay = () => {
    const { current: videoEl } = video
    playing ? videoEl.pause() : videoEl.play()

    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  return (
    <div className={styles.wrapper}>

      <video autoPlay muted className={styles.video} src={src} loop controls={false} ref={video} onClick={handlePlay} />
      <button className={playerClassName} onClick={handlePlay} />
      <VideoPlayerActions />
      <VideoDescription albumCover={albumCover} author={author} description={description} />
    </div>
  )
}
