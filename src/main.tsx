import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './components/redux/store.tsx'
import App from './App.tsx'
import './index.css'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
