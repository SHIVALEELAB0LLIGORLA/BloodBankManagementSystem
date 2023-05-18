import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/Blood Donor.jpg';
import baby from '../../../images/Blood Donation.jpg';


const Dashboard = () => {
    return (
        
        <div style={{ height: "1000px", 'width': '100%' }} className="row d-flex align-items-center container">
            <div className="col-md-5 col-sm-6 col-12 offset-md-1 md-mx-5">
                <h1>Blood Donation <br /></h1>
                <p className="text-secondary">The most precious gift that one can give to another person is the gift of life i.e. blood. It is the essence of life. 
                Your blood saves more than one life when it is separated into its components (red blood cells, plasma etc.). 
                Blood is needed regularly for patients with diseases such as thalassemia and hemophilia, and also for the treatment of injuries after an accident, major surgeries, anemia, etc.
                Donating Blood also improves your health.
                </p>
                <Link to="/login" className="btn btn-primary btn-lg shadow rounded"> DONATE</Link>

            </div>
            
            <div className="col-md-6 col-sm-6 col-12">
                <img src={chair} className="img-fluid rounded" alt="" />
            </div>

            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-5 col-sm-6 col-12">
                        <img src={baby} className="img-fluid" alt="" />
                    </div>
                    
                    <div className="col-md-7 col-sm-6 col-12 align-self-center">
                        <h1>Before You Donate</h1>
                        <p>
                        <ul>
                            <li>Donating blood is a safe, simple, and rewarding experience that usually takes 30 minutes.</li>
                            <li>To donate blood, find a blood bank near you using eRaktKosh Nearby Blood Bank Search.</li>
                            <li>Requirement before Blood Donation is that your weight should be atleast 45 kgs , be at least 18 years old and be healthy in general.</li>
                            <li>If you have any particular health concerns then inform the blood bank at the time of blood donation</li>
                        </ul>
                        </p>
                        <a href="https://www.redcrossblood.org/donate-blood/blood-donation-process/before-during-after.html"> 
                        <button class="btn btn-primary"> Learn More</button>
                        </a>
                        
                       
    
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Dashboard;