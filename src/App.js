import Header from './components/Header'
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div className='container bg-nuetral-100 mx-auto flex flex-row'>
      <Sidebar />
      <div className='w-full'>
        <Header />
      </div>
    </div>
  )
}

export default App
