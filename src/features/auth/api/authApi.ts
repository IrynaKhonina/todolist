import { instance } from "@/common/instance"

import { LoginInputs } from "@/features/auth/lib/schemas"
import type { BaseResponse } from "@/common/types"

export const authApi = {
  login(args: LoginInputs) {
    return instance.post<BaseResponse<{ userId: number; token: string }>>(`/auth/login`, args)
  },
}
