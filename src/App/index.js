import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { theme } from "./theme";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./store"


export default function App() {
  //const [pizzas, setPizzas] = React.useState([])
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {Object.values(routes).map((route) => (
          <Route key={route.path} exact {...route} />
        ))}
      </Router>
      </ThemeProvider>
      </Provider>
  );
}
