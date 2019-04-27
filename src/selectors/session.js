export const token = state => state.session.token

export const user = state => state.session.user

export const userID = state => user(state).id

export const userName = state => user(state).name

export const userImage = state => user(state).image

export const loading = state => state.session.loading

export const hasToken = state => !!token(state)

export const authenticated = state => hasToken(state)
