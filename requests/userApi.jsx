/* eslint-disable camelcase */
import userData from '@/data/users'
import roleGroupData from '@/data/role_grants'

export const login = ({ username, password }) => {
    try {
        const user = userData
        const res = user.find((item) => item.username === username && item.password === password)
        if (res?.id) {
            sessionStorage.setItem('token', res.id)
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getUser = () => {
    const token = sessionStorage.getItem('token')
    if (token) {
        try {
            const user = userData
            const res = user.find((item) => item.id === parseInt(token))
            return res
        } catch (error) {
            console.log(error)
            throw error
        }
    } else {
        console.log('Not authorized!')
    }
}

export const logout = () => {
    try {
        sessionStorage.clear()
    } catch (error) {
        console.log(error)
    }
}

export const getMenuOptions = () => {
    const token = sessionStorage.getItem('token')
    if (token) {
        try {
            const user = userData
            const role_group = roleGroupData
            const role = user.find((item) => item.id === parseInt(token)).role
            const res = role_group.find((item) => item.role === role)
            return res
        } catch (error) {
            console.log(error)
            throw error
        }
    } else {
        console.log('Not authorized!')
    }
}
