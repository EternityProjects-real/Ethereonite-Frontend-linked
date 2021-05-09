import React from 'react';
import './Donation.css';

function Donation() {
  return (
    <>
    <div className='dashboard-padding-left'>
    <div className='container-donation'>
      <div className='title-donation'>COVID - 19 PANDEMIC</div>
      <div className='content-donation'>Each death to COVID is a tragedy that could have been avoided. With the vicious second wave of coronavirus wreaking havoc across India, the daily fatality number has now crossed 2,500+ and is expected to rise in the coming weeks. Fell free to make transactions at addres: 0x28Bf8D65bbD01644d78431557991b462061f2A89</div>
      <button className='button-donation'>DONATE TO HELP PEOPLE</button>
      </div>

      <div className='container-donation'>
      <div className='title-donation'>Funds for Oxygen</div>
      <div className='content-donation'>We are a Non-profit organization which is helping india with critical oxygen supplies. If you wan to be part of the revolution then make payment at addres: 0x9109C4575a824535bAc4efA008Ed4E81DFf8755E every small amount is appreciated and will help India</div>
      <button className='button-donation'>DONATE TO HELP PEOPLE</button>
      </div>
      </div>
    </>
  );
}

export default Donation;