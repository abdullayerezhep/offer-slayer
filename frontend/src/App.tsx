import './App.css'
import { TrpcProvider } from './lib/trpc'
import { InterviewQuestion } from './pages/InterviewQuestions'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' />
          <InterviewQuestion />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App
