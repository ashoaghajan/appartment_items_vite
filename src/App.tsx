import { ThemeProvider } from 'styled-components'
import { RegistrationPage } from './pages/RegistrationPage'
import { theme } from './theme/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ListingPage } from './pages/ListingPage'
import { CreatePage } from './pages/CreatePage'
import { DetailsPage } from './pages/DetailsPage'
import { LoginPage } from './pages/LoginPage'
import { routes } from './constants/consts'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<ListingPage />} />
          <Route path={routes.create} element={<CreatePage />} />
          <Route path={routes.details} element={<DetailsPage />} />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.registration} element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
