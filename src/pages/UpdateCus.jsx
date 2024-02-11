import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateCus = () => {
    const [contract,setContract] = useState({
        LoanDate:"",
        ReturnDate:"",
        Duration:null,
        Status:"",
        Priciple:null,
        Interest:null,
        Penality:"",
        ReturnMoney:null,
        CusID:null,
        AID:null
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setContract((prev) => ({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/contract", contract)
            navigate("/contract")
        }catch(err){
            console.log(err)
        }
    }

    console.log(contract)

    return(
        <div>
            <h1>Add Contract</h1>
            <input type='date' placeholder='Select Date' onChange={handleChange} name='LoanDate'/>
            <input type='date' placeholder='Select Date' onChange={handleChange} name='ReturnDate'/>
            <input type='number' placeholder='Duration'onChange={handleChange} name='Duration'/>
            <input type='text' placeholder='Status'onChange={handleChange} name='Status'/>
            <input type='number' placeholder='Priciple'onChange={handleChange} name='Priciple'/>
            <input type='number' placeholder='Interest'onChange={handleChange} name='Interest'/>
            <input type='text' placeholder='Penality'onChange={handleChange} name='Penality'/>
            <input type='text' placeholder='ReturnMoney'onChange={handleChange} name='ReturnMoney'/>
            <input type='text' placeholder='Customer ID'onChange={handleChange} name='CusID'/>
            <input type='text' placeholder='Admin ID'onChange={handleChange} name='AID'/>

            <button onClick={handleClick}>Add Contract</button>
        </div>
    )
}

export default UpdateCus