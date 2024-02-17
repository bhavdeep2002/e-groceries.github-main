import axios from 'axios';
import React, { Component } from 'react';
import Addtocartbtn from '../Addtocartbtn/Addtocartbtn';
import swal from 'sweetalert';

class Reviews extends Component {

    constructor() {
        super()
        console.log("constructor")
        this.state = {
            review: "",
            name: "",
            email: ""
        }
        this.change = this.change.bind(this)
        this.reviewsend = this.reviewsend.bind(this);

    }

    change(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    reviewsend(e) {
        e.preventDefault()


        swal({
            position: 'top-end',
            icon: 'success',
            title: 'comment has sent',
            showConfirmButton: false,
            timer: 1500
        })

        axios.post("http://localhost:3012/reviews", this.state)
            .then((res) => {
            }).catch()

    }
    render() {
        console.log("render")
        console.log(this.state)
        return (
            <div className="row">
                <div className="col-md-1">1</div>
                <div className="col-md-10">
                    <form action="" style={{ border: "1px solid black" }}>
                        <div className="container-flex">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className='textbox'>
                                        <label>Your review *</label>
                                        <textarea name='review' className='textarea' onChange={this.change}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='input-container'>
                                        <label> Name *</label>
                                        <input name='name' className='input' type="text" onChange={this.change} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='input-container'>
                                        <label> Email *</label>
                                        <input name='email' className='input' type="text" onChange={this.change} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className='textbox'>
                                        <input style={{ height: "15px", width: "15px", marginRight: "8px" }} type="checkbox" />
                                        <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                    </div>
                                </div>
                            </div>
                            <Addtocartbtn reviewsend={this.reviewsend} text="SUBMIT" className="textbox" />
                        </div>
                    </form>
                </div>
                <div className="col-md-1">1</div>
            </div>
        );
    }
}

export default Reviews;