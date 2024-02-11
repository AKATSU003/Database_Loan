import React, { useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateCon = () => {
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
    const location = useLocation()

    const ConID = location.pathname.split("/contract")[2]

    const handleChange = (e) => {
        setContract((prev) => ({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/contract" + ConID, contract)
            navigate("/contract")
        }catch(err){
            console.log(err)
        }
    }

    console.log(contract)


    return(
        <div>
            <h1>Update the Contract</h1>
            <input 
                type='date' 
                placeholder="LoanDate"
                onChange={handleChange} 
                name='LoanDate'
            />

            <input 
                type='date' 
                placeholder="ReturnDate"
                onChange={handleChange} 
                name='ReturnDate'
            />

            <input 
                type='number' 
                placeholder="Duration"
                onChange={handleChange} 
                name='Duration'
            />
            <input 
                type='text' 
                placeholder="Status"
                onChange={handleChange} 
                name='Status'
            />

            <input 
                type='number' 
                placeholder="Priciple"
                onChange={handleChange} 
                name='Priciple'
            />

            <input 
                type='number' 
                placeholder="Interest"
                onChange={handleChange} 
                name='Interest'
            />

            <input 
                type='text' 
                placeholder="Penality"
                onChange={handleChange} 
                name='Penality'
            />

            <input 
                type='text' 
                placeholder="ReturnMoney"
                onChange={handleChange} 
                name='ReturnMoney'
            />
            <input 
                type='text' 
                placeholder="CusID"
                onChange={handleChange} 
                name='CusID'
            />
            <input 
                type='text' 
                placeholder="AID"
                onChange={handleChange} 
                name='AID'
            />

            <button onClick={handleClick}>Update Contract</button>
        </div>
    )
}

export default UpdateCon