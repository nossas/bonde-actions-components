export interface ActivistInput {
  name: string
  email: string
  first_name?: string
  last_name?: string
  code?: string
  phone?: string
  city?: string
  state?: string
}

export interface WidgetActionInput {
  custom_fields: Record<string, any>
}

export interface WidgetActionPayload {
  activist: ActivistInput
  input: WidgetActionInput
  widget_id: number
}
