import Router from './router/Router'
import ThemeState from './utility/context/ThemeState'

function App() {
  return (
    <ThemeState>
      <Router />
    </ThemeState>
  )
}

export default App
