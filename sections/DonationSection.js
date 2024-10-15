import React, { useState, useEffect } from 'react';

const DonationSection = ({ goal, raised, topDonors = [], onDonate }) => {
  const [donationInput, setDonationInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [currentRaised, setCurrentRaised] = useState(raised);
  const [localTopDonors, setLocalTopDonors] = useState(topDonors);

  useEffect(() => {
    setCurrentRaised(raised);
    setLocalTopDonors(topDonors);
  }, [raised, topDonors]);

  const handleDonateClick = () => {
    setShowInput(true);
  };

  const handleDonationChange = (e) => {
    setDonationInput(e.target.value);
  };

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleDonateSubmit = () => {
    if (donationInput && !isNaN(donationInput) && nameInput) {
      const donationAmount = parseFloat(donationInput);
      const newDonor = { name: nameInput, amount: donationAmount };

      onDonate(donationAmount, newDonor);

      setDonationInput('');
      setNameInput('');
      setShowInput(false);
    }
  };

  const progressPercentage = Math.min((currentRaised / goal) * 100, 100).toFixed(2);

  return (
    <div className='donation-section'>
      <h2 className='goal'>Goal: ${goal.toLocaleString()}</h2>
      <div className='progress-container'>
        <div className='progress-bar'>
          <div className='progress' style={{ width: `${progressPercentage}%` }}>
            <span className='progress-percentage'>{progressPercentage}%</span>
          </div>
        </div>
        <p className='raised'>${currentRaised.toLocaleString()} raised</p>
      </div>

      <button className='donate-btn' onClick={handleDonateClick}>
        Make a Donation
      </button>

      {showInput && (
        <div className='donation-input'>
          <input
            type='text'
            value={nameInput}
            onChange={handleNameChange}
            placeholder='Enter your name'
          />
          <input
            type='number'
            value={donationInput}
            onChange={handleDonationChange}
            placeholder='Enter amount'
          />
          <button onClick={handleDonateSubmit}>Donate</button>
        </div>
      )}

      <h3 className='top-donors-title'>Top Donors</h3>
      {localTopDonors.length > 0 ? (
        <ul className='top-donors-list'>
          {localTopDonors.map((donor, index) => {
            const donorPercentage = ((donor.amount / goal) * 100).toFixed(2);
            return (
              <li key={index}>
                <span className='donor-name'>{donor.name}</span>
                <span className='donor-amount'>${donor.amount.toLocaleString()}</span>
                <span className='donor-percentage'>({donorPercentage}%)</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className='no-donors'>No donors yet. Be the first!</p>
      )}

      <style jsx>{`
        .donation-section {
          background: #080e10;
          color: #ffffff;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 2px solid #00dc93;
          max-width: 400px;
          margin: auto;
        }

        .goal {
          color: #00dc93;
          font-size: 1.8rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .progress-container {
          margin-bottom: 1.5rem;
        }

        .progress-bar {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          height: 12px;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .progress {
          height: 100%;
          background: linear-gradient(203deg, rgba(192, 90, 255, 1) 0%, rgba(67, 39, 158, 1) 100%);
          border-radius: 6px;
          transition: width 0.3s ease;
        }

        .progress-percentage {
          display: none;
        }

        .raised {
          font-size: 1.2rem;
          color: #ffffff;
          text-align: right;
          margin: 0;
        }

        .donate-btn {
          background: linear-gradient(250deg, rgba(255, 85, 219, 1) 24%, rgba(52, 108, 255, 1) 100%);
          color: #ffffff;
          border: none;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          border-radius: 50px;
          width: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .donate-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        }

        .donation-input {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .donation-input input {
          padding: 0.8rem;
          border-radius: 8px;
          border: 1px solid #845aff;
          background-color: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          font-size: 1rem;
        }

        .donation-input input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .donation-input button {
          background-color: #845aff;
          color: #ffffff;
          border: none;
          padding: 0.8rem;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          border-radius: 8px;
          transition: background-color 0.3s ease;
        }

        .donation-input button:hover {
          background-color: #7040e0;
        }

        .top-donors-title {
          color: #00dc93;
          font-size: 1.4rem;
          margin: 2rem 0 1rem;
          text-align: center;
        }

        .top-donors-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .top-donors-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem;
          margin-bottom: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          transition: background-color 0.3s ease;
        }

        .top-donors-list li:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .donor-name {
          color: #ffffff;
          font-weight: bold;
        }

        .donor-amount {
          color: #00dc93;
        }

        .donor-percentage {
          color: #845aff;
          font-size: 0.9rem;
        }

        .no-donors {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default DonationSection;
