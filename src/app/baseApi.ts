import { AUTH_TOKEN } from "@/common/constants"
import { handleError } from "@/common/utils"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
  reducerPath: "todolistsApi",
  tagTypes: ["Todolist", "Task"],
  keepUnusedDataFor: 5,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      // ИЗМЕНЕНО: используем proxy путь
      baseUrl: '/api',
      credentials: "include",
      prepareHeaders: (headers) => {
        headers.set("API-KEY", import.meta.env.VITE_API_KEY)

        // Используем токен из переменных окружения
        const token = import.meta.env.VITE_AUTH_TOKEN
        if (token && token !== "null") {
          headers.set("Authorization", `Bearer ${token}`)
        }

        // Также проверяем localStorage (только в браузере)
        if (typeof window !== 'undefined') {
          const localStorageToken = localStorage.getItem(AUTH_TOKEN)
          if (localStorageToken) {
            headers.set("Authorization", `Bearer ${localStorageToken}`)
          }
        }
      },
    })(args, api, extraOptions)

    handleError(api, result)

    return result
  },
  endpoints: () => ({}),
})