import { instance } from "@/common/instance"

import { LoginInputs } from "@/features/auth/lib/schemas"
import type { BaseResponse } from "@/common/types"
import { MeResponse } from "@/features/auth/api/authApi.types.ts"

export const authApi = {
  login(args: LoginInputs) {
    return instance.post<BaseResponse<{ userId: number; token: string }>>(`/auth/login`, args)
  },

  logout() {
    return instance.delete<BaseResponse>(`/auth/login`)
  },
  me() {
    return instance.get<BaseResponse<MeResponse> >(`/auth/me`)
  },
}


