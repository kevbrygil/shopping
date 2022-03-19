import useSWR from 'swr'

import { getUser } from '@/requests/userApi'

const useUser = () => {
    const { data, mutate, error } = useSWR('api_user', getUser)

    const loading = !data && !error
    const loggedIn = !error && data
    const loggedOut = error && error.status === 403

    return {
        loading,
        loggedIn,
        loggedOut,
        userData: data,
        mutate,
    }
}

export default useUser
