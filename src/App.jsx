import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {
  return (
    <>
      <main className='container mx-auto'>
      <Header></Header>
      <div className='md:flex '>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      </main>
    </>
  )
}

export default App
