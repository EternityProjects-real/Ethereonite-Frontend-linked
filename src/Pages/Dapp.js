import React from 'react';
import Cards from '../Components/Cards/DappCards';
import BlockTable from '../Components/Cards/DappTableBlock';
import Chart from '../Components/Charts/Chart'
import './Dapp.css';

function Dapp() {
  return (
    <>
    <div className='dapp-main'>
    <div className='dapp-grid'>
    <form method="post" action="http://127.0.0.1:5000/makepayment">
    <div>
    <Cards Title='Reciver Account' Content='account_reciver'/>
    <Cards Title='Private Key' Content='private_key'/>
    </div>
    <div>
    <Cards Title='Value' Content='value'/>
    <Cards Title='submit' Content='submit'/>
    </div>
    </form>
    <div className='charts'>
    <div ><Chart/></div>
       
    </div>
    </div>
    <div className='dapp-grid-blocks'>
    <div>
    <BlockTable /></div>
    <div>
    <BlockTable/></div>
    </div>
    </div>

    </>
  );
}

export default Dapp;