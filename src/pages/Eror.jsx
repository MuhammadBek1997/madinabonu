import React from 'react'
import '../style/Eror.css'
const Eror = () => {
    return (
        <div className='Eror'>
            <div>
                <h2>
                    404
                </h2>
                <p>
                    We are sorry, but the page
                    you requested was not found
                </p>
                <button>
                    Back To Home →
                </button>
            </div>

            <div>
              <img src="public/images/Photo.jpg" alt="" />
            </div>
        </div>
    )
}

export default Eror
