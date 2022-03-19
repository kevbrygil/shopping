import React, { useState, useEffect } from 'react'
import Auth from '@/layouts/Auth'
import Head from '@/components/General/Head'
import { login } from '@/requests/userApi'
import useUser from '@/swr/useUser'
import Router from 'next/router'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [userPassInvalid, setUserPassInvalid] = useState(false)
    const [loading, setLoading] = useState(false)
    const { mutate, loggedIn } = useUser()

    const onLoginSubmit = (e) => {
        e.preventDefault()
        if (username && password) {
            setLoading(true)
            const isOk = login({ username, password })
            if (isOk) mutate()
            else {
                setUserPassInvalid(true)
            }
            setLoading(false)
        } else {
            if (!username) setUsernameError(true)
            if (!password) setPasswordError(true)
        }
    }

    useEffect(() => {
        if (loggedIn) Router.replace('/portal/productos')
    }, [loggedIn])

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-offset-4 col-sm-4">
                        <form onSubmit={onLoginSubmit}>
                            <div className="form-group">
                                <label htmlFor="inputUsername">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputUsername"
                                    placeholder="Username"
                                    onChange={(e) => {
                                        setUserPassInvalid(false)
                                        setUsernameError(false)
                                        setUsername(e.target.value)
                                    }}
                                />
                                {usernameError ? <div className="text-danger">El usuario es requerido.</div> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputnputPassword">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputnputPassword"
                                    placeholder="Password"
                                    onChange={(e) => {
                                        setUserPassInvalid(false)
                                        setPasswordError(false)
                                        setPassword(e.target.value)
                                    }}
                                />
                                {passwordError ? <div className="text-danger">La contraseña es requerida.</div> : null}
                            </div>
                            <button type="submit" className="btn btn-default" disabled={loading}>
                                Iniciar Sesión
                            </button>
                            {userPassInvalid ? (
                                <div className="text-danger" id="userpassHelp">
                                    Usuario o contraseña inválido.
                                </div>
                            ) : null}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

Login.layout = Auth
