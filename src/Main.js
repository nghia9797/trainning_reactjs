import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faAngleRight,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { Provider } from "react-redux"
import store from "./store"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles"
import { Routing } from "./Routing"
import CssBaseline from "@material-ui/core/CssBaseline"
import { theme } from "./features/themeConfig"
library.add(fab, faAngleRight, faArrowAltCircleUp)

const Main = () => {
  return (
    <>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Routing />
        </MuiThemeProvider>
      </Provider>
    </>
  )
}

export default Main
