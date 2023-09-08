import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loading = () => {
    return (
        <>
            <div className="loader">
                <Triangle
                    height="100"
                    width="100"
                    color="#f8456c"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        </>
    )
}

export default Loading
