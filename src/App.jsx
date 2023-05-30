/* eslint-disable react/jsx-key */
import { Post } from './components/Post';
import { Header } from './components/Header';
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: ""


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/kunzeleric.png',
      name: "Eric Kunzel",
      role: "Unemployed @ Studying"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-30 08:23:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/hruzeda.png',
      name: "Uzedinha",
      role: "Dev @ Something"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-27 15:35:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
