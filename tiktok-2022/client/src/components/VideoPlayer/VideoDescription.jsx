import { AlbumDisk } from './AlbumDisk'

import styles from './styles.module.css'

export function VideoDescription ({ author, description, albumImage }) {
  return (
    <footer className={styles.description}>
      <div>
        <strong>@{author}</strong>
        <p>{description}</p>
      </div>
      <AlbumDisk albumImage={albumImage} />
      <div />
    </footer>
  )
}
