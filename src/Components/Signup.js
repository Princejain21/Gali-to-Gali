import React, { useState } from 'react'
import '../App.css'
import Alert from './Alert';

export default function Signup() {
    const [show, setshow] = useState(false)
    const press = () => {
        document.getElementById('small').setAttribute('class', '');
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        let val = document.getElementById('password').value
        let val1 = document.getElementById('password1').value
        let email = document.getElementById('email').value;
        if (val === val1 && email !== '') {
            setshow(true)
            document.getElementById('passmsg').setAttribute('class', 'd-none')
            setTimeout(() => { setshow(false); window.location.reload() }, 4000)

        } else if (email === "" || email === null || email === undefined) {
            alert('please fill valid credentials')
        }
        else {
            document.getElementById('passmsg').setAttribute('class', 'text-danger');
        }
    }
    return (
        <>
            {show && <Alert />}
            <h1 className='text-white text-center my-2'>SignUp</h1>

            <div className='box  my-2 p-4'>

                <form className='bg-dark text-white p-5'>
                    <div className='form-inline'>
                        <div className='form-group mr-2'>
                            <label htmlFor='fName' className='form-group-label mr-2'>First Name</label>
                            <input type='text' id="fName" className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lName' className='form-group-label mr-2'>Last Name</label>
                            <input type='text' id="lName" className='form-control' />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='contact' className='form-group-label '>Contact</label>
                        <input type='number' id="contact" className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='buisness' className='form-group-label '>Company Name</label>
                        <input type='text' id="buisness" className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='Address' className='form-group-label '>Address</label>
                        <input type='text' id="Address" placeholder='Enter your Address' className='form-control' />
                    </div>



                    <div className='form-inline'>
                        <div className="input-group mb-3 mr-5">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">State</label>
                            </div>


                            <select className="custom-select px-5" defaultValue="">
                                <option value="" >
                                    Select State...
                                </option>
                                <option value="1">UP</option>
                                <option value="2">MP</option>
                                <option value="3">Jaipur</option>
                            </select>

                        </div>
                        <div className='form-group'>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">City</label>
                                </div>
                                <select className="custom-select px-5" id="inputGroupSelect01" defaultValue="" >
                                    <option value="" >Select City...</option>
                                    <option value="1">Agra</option>
                                    <option value="2">Delhi</option>
                                    <option value="3">Mumbai</option>
                                    <option value="3">Noida</option>
                                    <option value="3">Jaipur</option>
                                    <option value="3">Bhopal</option>
                                    <option value="3">Hyderabad</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Choose your gender</label><br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineRadio3">Trangender</label>
                        </div>
                    </div>
                    <div className='form-group my-2'>
                        <label htmlFor='dob'>
                            Select your Birthdate
                        </label>
                        <input type='date' className='form-control' id="dob" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email' className='form-group-label '>Email</label>
                        <input type='email' id="email" placeholder='Enter your Address' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password' className='form-group-label '>Password</label>
                        <input type='password' id="password" placeholder='Enter your Address' className='form-control' onClick={press} />
                    </div>
                    <small className='d-none' id='small'>
                        <ul className='text-warning'>
                            <li>Password must be contain at least One capital letter</li>
                            <li>Password must be contain at few number</li>
                            <li>Password must be contain a special chreacter such @#_$</li>
                        </ul>
                    </small>
                    <div className='form-group'>
                        <label htmlFor='password' className='form-group-label '>confirm Password</label>
                        <input type='password' id="password1" placeholder='Enter your Address' className='form-control' onClick={press} />
                        <small className='text-danger d-none' id='passmsg'> password doesn't match</small>
                    </div>

                    <button onClick={handleSubmit} className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        </>


    )
}
