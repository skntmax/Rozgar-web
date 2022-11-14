import React from 'react'

function ErrorMessage({message}) {
    return (
        <React.Fragment>
            <div className="alert alert-danger" role="alert">
                <i className="mdi mdi-block-helper me-2"></i>{`Error : ${message}`}
            </div>
        </React.Fragment>
    )
}

export default ErrorMessage