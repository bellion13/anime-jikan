import React from 'react'
import './PageHeader.scss'
// import bg from '../../assets/footer.jpg'
const PageHeader = props => {
    return (
        <div className='page-header'>
            <h2>
                {props.children}
            </h2>
        </div>

    )
}

export default PageHeader