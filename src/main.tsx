import { App } from "@/app/App"
import { createRoot } from "react-dom/client"
import "./index.css"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router"
import { store } from "./app/store"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
