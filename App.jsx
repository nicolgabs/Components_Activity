import TodoList from './components/todolist'
import './App.css'
import MovieList from './components/movielist'
import BookList from './components/booklist'
function App() {

  return (
    <>
    <div>
      <h1 className='bg-gray-100 text-center font-bold text-2xl'>Components Activity</h1>
    </div>
      <TodoList/>
      <MovieList/>
      <BookList/>
    </>
  )
}

export default App
