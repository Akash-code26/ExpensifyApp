import { login, logout } from '../../actions/auth'

test('should login user with uid', () => {
    const uid = '123abc'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should logout user', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})