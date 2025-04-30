import { useState } from 'react';

const WaveSubscription = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="wave-background">
      <div className="wave-container">
        <div className="wave-content">
          <h1 className="wave-heading">
            Join the Wave: Be Part<br />
            of the Decentralized<br />
            Revolution
          </h1>
          
          <p className="wave-subheading">
            The Wave community is at the heart of everything we do. Join<br />
            us today and be part of the future of Web3.
          </p>
          
          <div className="wave-form-container">
            <div className="wave-input-wrapper">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address" 
                className="wave-input" 
                required
              />
              <button onClick={handleSubmit} className="wave-button">Subscribe</button>
            </div>
            
            <div className="wave-social-links">
              <a href="#" className="wave-social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="wave-social-link">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="wave-shape wave-shape-1"></div>
        <div className="wave-shape wave-shape-2"></div>
      </div>
    </div>
  );
};

export default WaveSubscription;