import { RegisterFormState } from "@/actions/register";

export default function apiError(error: unknown): RegisterFormState {
    return {
      ok: false,
      data: null,
      error: error instanceof Error ? error.message : "Something went wrong",
      fieldErrors: null
    }
}