import { ThemeProvider } from "styled-components"
import { theme } from "./theme/styles"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
     <div>Hello world</div>
    </ThemeProvider>
  )
}

