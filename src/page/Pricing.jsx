import React from 'react'
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <>
      <section className='sofa'>
        <div className='Banner'>

        </div>
        <div className='plan'>
          <h2>
            Pricing & Plan
            <br />
            <span>Home / Priceing</span>
          </h2>
        </div>
        <div className='levels'>
          <div className='price'>
            <h2>
              Design advices
            </h2>
            <p>
              $ <span>29</span>
              <br />
              <span className='month'>/month</span>
            </p>
            {/* premimum */}
            <div className='amenities'>
              <p>
                General living space advices
              </p>
              <p>
                Renovation advices
              </p>
              <p>
                Interior design advices
              </p>
              <p>
                Furniture reorganization
              </p>
              <p>
                Up to 5 hours meetings
              </p>

              <button className='started-btn'>
                Get Started →
              </button>
            </div>
          </div>
        </div>
        {/* premimum */}
        <div className='premimum'>
          <div className='much'>
           <h2>
            Complete interior
           </h2>
           <p>
            $ <span>39</span>
            <br />
            <span>/month</span>
           </p>
           <button className='qulaity'>
             Most Popular Plans
           </button>
           <div className='comforts'>
              <p>
                 Complete home redesign
              </p>
              <p>
                Interior and exterior works
              </p>
              <p>
                Modular interior planning
              </p>
              <p> 
               Kitchen design
              </p>
              <p>
               Garages organization
              </p>
              <button className='get-btn'>
                 Get Started →
              </button> 
           </div>
          </div>
        </div>
          <div className='level'>
          <div className='price'>
            <h2>
              Furniture design
            </h2>
            <p>
              $ <span>59</span>
              <br />
              <span className='month'>/month</span>
            </p>
            <div className='amenities'>
              <p>
                Furniture for living room
              </p>
              <p>
                Furniture refurbishment
              </p>
              <p>
               Sofas and amchairs
              </p>
              <p>
                Tables and chairs
              </p>
              <p>
                Kitchens
              </p>

              <button className='started-btn'>
                Get Started →
              </button>
            </div>
          </div>
        </div>
    </section >
    </>
  )
}

export default Pricing
