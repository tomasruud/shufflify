// @flow

type Action = { +type: string }
type Dispatch = (action: Action | ThunkAction | PromiseAction) => any
type GetState = () => Object
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any
type PromiseAction = Promise<Action>
