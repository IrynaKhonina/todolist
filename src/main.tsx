import { App } from "@/app/App"
import { createRoot } from "react-dom/client"
import "./index.css"
import { store } from "./app/store"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
