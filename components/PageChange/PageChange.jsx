import React from 'react'
import PropTypes from 'prop-types'

const PageChange = (props) => {
    return (
        <div className="container-fluid">
            <h4 className="h4 font-italic text-center">Carga de contenido para: {props.path}</h4>
        </div>
    )
}

PageChange.propTypes = {
    path: PropTypes.string.isRequired,
}

export default PageChange
