import React from 'react'
import Headingh2 from '../Headingh2/Headingh2'
import { reviews } from '../Context/CustomersReviews'

export default function Reviews() {
    return (
        <section>
            <Headingh2 heading="Customers Reviews" />

            <div className="row">
                <div className="col-md-12">
                    <div className="container">
                        <div className="row">
                            {reviews && reviews.map((p, index) => {
                                return (
                                    <div className="col-md-3">
                                        <div style={{marginTop:"4%"}}>
                                            <div className="card my-card" >
                                                <img className='product-image card-img-top' src="/image/user.png" alt="..." />
                                                <div className="card-body">
                                                    <div className="category">{p.category}</div>
                                                    <h5 className="card-title">{p.name}</h5>
                                                    <p className="card-text">{p.description}</p>
                                                    <img className="fivestar" src="image/5-Stars-PNG-HD.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
