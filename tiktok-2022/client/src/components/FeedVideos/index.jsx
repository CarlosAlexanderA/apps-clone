import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'space floating',
    description: 'Es hora de ver como el el espacio es tan inmenso y mostrar su esplendor al mundo ',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - zzeroki',
    albumCover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWNhfGVufDB8fDB8fHww',
    src: './../../../Videos/Download.mp4'
  },
  {
    id: 2,
    author: 'Natalia Horna',
    description: 'Es hora de ver como el el espacio es tan inmenso ',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - zzeroki',
    albumCover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWNhfGVufDB8fDB8fHww',
    src: './../../../Videos/Presto_prime.mp4'
  },
  {
    id: 3,
    author: 'Alguien esasd',
    description: 'Es hora de ver como el el espacio es tan inmenso ',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - aas saasdads',
    albumCover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWNhfGVufDB8fDB8fHww',
    src: './../../../Videos/Mikey.mp4'
  }
]

export default function FeedVideos () {
  return (
    VIDEOS.map(video => (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} />
      </div>
    ))
  )
}
