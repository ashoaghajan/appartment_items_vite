import { ThemeProvider } from "styled-components"
import { theme } from "./theme/styles"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ListingPage } from "./pages/ListingPage"
import { CreatePage } from "./pages/CreatePage"
import { DetailsPage } from "./pages/DetailsPage"
import { LoginPage } from "./pages/LoginPage"
import { RegistrationPage } from "./pages/RegistrationPage"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListingPage />}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/details' element={<DetailsPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

