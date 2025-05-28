import React from 'react'
import './Footer.scss'
import ft from '../../assets/images/footer.jpg'
function Footer() {
    return (
        <div className='footer'>
            <div className="footer__container">
                <div className='bgr-footer'>
                    <img src={ft} alt="Footer" />
                </div>
            </div>
        </div>
    )
}

export default Footer