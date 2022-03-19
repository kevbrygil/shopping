import React, { useState, useEffect } from 'react'
import { getMenuOptions, logout } from '@/requests/userApi'
import useUser from '@/swr/useUser'
import Router from 'next/router'
import Link from 'next/link'

const OptionsNavbar = () => {
    const { mutate, loggedIn } = useUser()
    const [optionsData, setOptionsData] = useState()

    useEffect(() => {
        if (loggedIn) setOptionsData(getMenuOptions())
    }, [loggedIn])

    const normalizeLink = (str) => {
        const accent = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U' }
        return str
            .split('')
            .map((letra) => accent[letra] || letra)
            .join('')
            .toString()
            .toLowerCase()
    }

    return (
        <>
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Open</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img className="nav-logo" src="/images/logo-light.svg" alt="Logo" />
                    </a>
                </div>
                <div className="">
                    <ul className="nav navbar-nav">
                        {optionsData &&
                            optionsData.modules &&
                            optionsData.modules.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <Link href={`/portal/${normalizeLink(item.option)}`}>{item.option}</Link>
                                    </li>
                                )
                            })}
                        <li>
                            <a
                                href="#"
                                onClick={() => {
                                    logout()
                                    Router.replace('/auth/login/')
                                    mutate(null)
                                }}>
                                Cerrar Sesión
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default OptionsNavbar
