import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AboutUs } from './components/AboutUs/AboutUs'
import { MainPage } from './components/MainPage/MainPage'
import { HowDoesThisWork } from './components/HowDoesThisWork/HowDoesThisWork'
import { Comments } from './components/Comments/Comments'
import { Contacts } from './components/Contacts/Contacts'
import { ChoiceTrain } from './components/ChoiceTrain/ChoiceTrain'
import { Layout } from './components/Layout/Layout'
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/Frontend_DiplomWork' element={<MainPage />} />
          <Route path='/Frontend_DiplomWork/how-does-this-work' element={<HowDoesThisWork />} />
          <Route path='/Frontend_DiplomWork/comments' element={<Comments />} />
          <Route path='/Frontend_DiplomWork/about-us' element={<AboutUs />} />
          <Route path='/Frontend_DiplomWork/contacts' element={<Contacts />} />
          <Route path='/Frontend_DiplomWork/choiceTrain' element={<ChoiceTrain />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
