import React from 'react';
import Cards from '../Components/Cards/DashboardCard';
import './Dashboard.scss';

function Dashboard() {
  return (
    <>
    <div className='dashboard-main'>
    <div className='flex-title'>
    <Cards Title='TOTAL' Content='0.29 ether'/>
    <Cards Title='VALUE' Content='$1508.29'/>
    <Cards Title='DONATION' Content='$453.22'/>
    </div>


    <div className='grid-table'>
    <div>
  <header class="projects-header">
    <div class="title">Latest Blocks</div>    
  </header>
  <table class="projects-table">
    <thead>
      <tr>
        <th>Block No</th>
        <th>Block Hash</th>
        <th>Miner</th>
        <th>value</th>
        
      </tr>
    </thead>
    <tr>
      <td>
        <p>177,789</p>
        <p></p>
      </td>
      <td>
        <p>236x4576567x57</p>
        <p></p>
      </td>
      <td class="member">
        <figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" /></figure>
        <div class="member-info">
          <p>Random Miner</p>
          <p>Miner</p>
        </div>
      </td>
      <td>
        <p>$4,670</p>
        <p></p>
      </td>
      
                </tr>
            </table> 
            </div>

            <dic>
            <header class="projects-header">
            <div class="title">Latest Transaction</div>    
          </header>
          <table class="projects-table">
            <thead>
              <tr>
                <th>Block No</th>
                <th>Block Hash</th>
                <th>Miner</th>
                <th>value</th>
                
              </tr>
            </thead>
            <tr>
              <td>
                <p>177,789</p>
                <p></p>
              </td>
              <td>
                <p>236x4576567x57</p>
                <p></p>
              </td>
              <td class="member">
                <figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" /></figure>
                <div class="member-info">
                  <p>Random Miner</p>
                  <p>Miner</p>
                </div>
              </td>
              <td>
                <p>$4,670</p>
                <p></p>
              </td>
              
                        </tr>
                    </table>
                    </dic>
                    </div> 
                    </div>
    </>
  );
}

export default Dashboard;