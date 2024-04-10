import { AlbumDisk } from './AlbumDisk'

import styles from './styles.module.css'

export function VideoDescription ({ author, description, albumCover }) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <strong>
          <a className={styles.author} href='/user/'>
            @{author}
          </a>
        </strong>
        <p className={styles.text}>{description}</p>
      </div>
      <AlbumDisk albumCover={albumCover} />
      <div />
    </footer>
  )
}
