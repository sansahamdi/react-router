import React from 'react'
import StarRating from './StarRating'
import {useHistory} from 'react-router-dom'

const Trailer = ({ match, arr }) => {
    const history=useHistory()
    const found = arr.find(el => el.id == match.params.id)
    if (found) {
        return (
            
            <section className="view intro-video">
                <h1 className="text-center bg-primary">WELCOME TO EGYBEST</h1>
                <div className="hm-gradient">
                    <div className="full-bg-img">
                        <div className="container flex-center">
                            <div className="row pt-5 mt-3">
                                <div className="col-lg-6 wow fadeIn mb-5 text-center text-lg-left">
                                    <div className="white-text">
                                        <h1 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s"> {found.title} </h1>
                                        <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                                        <p className="wow fadeInLeft" data-wow-delay="0.3s"> {found.description} </p>
                                        <StarRating
                                            count={5}
                                            size={20}
                                            value={found.rate}
                                            activeColor={'yellow'}
                                            inactiveColor={'#ddd'}
                                            onChange={() => { }}

                                        />
                                        <br />
                                        <a className="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">go streaming</a>
                                        <a className="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s" onClick={()=>history.push('/')} >go back to the list</a>
                                    </div>
                                </div>

                                <div className="col-lg-6 wow fadeIn">
                                    <div className="embed-responsive embed-responsive-16by9 wow fadeInRight">
                                        <iframe className="embed-responsive-item" src={found.trailer}
                                            allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
    return (
        <div className='container'>Trailer movie not found, please try another time</div>
    )
}

export default Trailer