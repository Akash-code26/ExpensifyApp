import authReducer from '../../reducers/auth'


test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@INNIT' })
    expect(state).toEqual({})
})


test('should login with user uid', () => {
    const uid = '123abc'
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action)
    expect(state.uid).toEqual(action.uid)
})

test('should logout user', () => {
    const uid = '123abc'
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid }, action)
    expect(state).toEqual({})
})