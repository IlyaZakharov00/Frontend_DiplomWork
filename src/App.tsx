import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AboutUs } from './components/AboutUs/AboutUs'
import { MainPage } from './components/MainPage/MainPage'
import { HowDoesThisWork } from './components/HowDoesThisWork/HowDoesThisWork'
import { Comments } from './components/Comments/Comments'
import { ChoiceTrain } from './components/ChoiceTrain/ChoiceTrain'
import { Layout } from './components/Layout/Layout'
import { ChoiceSeats } from './components/ChoiceSeats/ChoiceSeats'
import { AddPassengers } from './components/AddPassengers/AddPassengers'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { PaymentPage } from './components/PaymentPage/PaymentPage'
import { CheckPage } from './components/CheckPage/CheckPage'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/Frontend_DiplomWork' element={<MainPage />} />
          <Route path='/Frontend_DiplomWork/how-does-this-work' element={<HowDoesThisWork />} />
          <Route path='/Frontend_DiplomWork/comments' element={<Comments />} />
          <Route path='/Frontend_DiplomWork/about-us' element={<AboutUs />} />
          <Route path='/Frontend_DiplomWork/choiceTrain' element={<ChoiceTrain />} />
          <Route path='/Frontend_DiplomWork/choiceSeats/:id' element={<ChoiceSeats />} />
          <Route path='/Frontend_DiplomWork/addPassengers' element={<AddPassengers />} />
          <Route path='/Frontend_DiplomWork/paymentPage' element={<PaymentPage />} />
          <Route path='/Frontend_DiplomWork/checkPage' element={<CheckPage />} />
        </Route>
      </Routes>
    </Router >
  )
}

export default App
