import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Contracts = () => {
    const [contracts,setContracts] = useState([])

    useEffect(()=>{
        const fecthAllContracts = async()=>{
            try{
                const res = await axios.get("http://localhost:8800/contract")
                setContracts(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fecthAllContracts()
    },[])

    return(
        <div>
            <h1> Contract </h1>
            <div className="contracts">
                {contracts.map(contract=>(
                    <div className="contract">
                        <h2>{contract.ConID}</h2>
                        <h2>{contract.Status}</h2>
                        <h2>{contract.Priciple}</h2>
                        <h2>{contract.ReturnDate}</h2>
                        <button className='detail'><Link to={`/contract/detail/${contract.ConID}`}> Detail </Link></button>
                        <button><Link to = {`/contract/${contract.ConID}`}>Update</Link></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contracts