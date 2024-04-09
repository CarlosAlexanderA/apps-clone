import styles from './styles.module.css'

export function AlbumDisk ({ albumImage }) {
  return (
    <div className={styles.album}>
      <img src={albumImage} />
    </div>
  )
}
