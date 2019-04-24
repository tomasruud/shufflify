export const token = state => state.session.token
export const user = state => state.session.user
export const userID = state => user(state).id
export const loading = state => state.session.loading
export const hasToken = state => !!token(state)
export const authenticated = state => hasToken(state)
export const error = state => state.session.error