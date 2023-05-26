import { Post } from './components/Post';
import { Header } from './components/Header';
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author="Diego" content="Lorem Ipsum" />
          <Post author="Gabriel" content="Um novo post legal" />
        </main>
      </div>
    </div>
  )
}
