import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AboutUs } from './components/AboutUs/AboutUs'
import { MainPage } from './components/MainPage/MainPage'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { HowDoesThisWork } from './components/HowDoesThisWork/HowDoesThisWork'
import { Comments } from './components/Comments/Comments'
import { Contacts } from './components/Contacts/Contacts'
import { ChoiceTrain } from './components/ChoiceTrain/ChoiceTrain'

function App() {

  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/Frontend_DiplomWork' element={<MainPage />} />
        <Route path='/Frontend_DiplomWork/about-us' element={<AboutUs />} />
        <Route path='/how-does-this-work' element={<HowDoesThisWork />} />
        <Route path='/Frontend_DiplomWork/comments' element={<Comments />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/Frontend_DiplomWork/choiceTrain' element={<ChoiceTrain />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
