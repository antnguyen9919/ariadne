import React from 'react'
import { Link } from 'react-router-dom'

const Footer2 = () => {
  return (
    <div className='container-fluid p-5 mt-5 bg-black text-white text-center font-weight-bold align-items-center'>
                <div className="row justify-content-center">
                    <div className="col-md-2">
                        Technology

                        <ul>
                            <li><Link to='/ariadne-mapping'>Ariadne Mapping</Link></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-md-2">Company</div>
                    <div className="col-md-2">Social Media</div>
                    <div className="col-md-2"><button type="button" class="btn btn-danger">Contact Us</button></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-2">
                    <Link to='/ariadne-mapping'>Ariadne Mapping</Link>
            <Link to='/ariadne-navigation'>Ariadne Navigation</Link>
            <Link to='/ariadne-analytics'>Ariadne Analytics</Link>
            <Link to='/ariadne-engagement'>Ariadne Engagement</Link>
            <Link to='/industries'>Industries</Link>
            <Link to='/data-lifecycle'>Data Lifecycle</Link>
                    </div>
                    <div className="col-md-2">Company</div>
                    <div className="col-md-2">Social Media</div>
                    <div className="col-md-2"><button type="button" class="btn btn-danger">Contact Us</button></div>
                </div>
    </div>
  )
}

export default Footer2