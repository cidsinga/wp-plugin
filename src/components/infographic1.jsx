import React from 'react';

const InfoGraphic1 = () => {
  const styles = `
    .info-1-wrap {
      display: flex;
      padding: 1rem 3rem 2rem;
      background: #EBF2FB;
      color: #145BAD;
    }
    .info-1-wrap h2 {
      font-size: 1.2rem;
    }
    .info-1-wrap p {
      font-style: italic;
      font-size: 1rem;
      position: relative;
    }
    .info-1-wrap p::after {
      content: '';
      width: 2.8rem;
      height: 0.05rem;
      background: #145BAD;
      left: calc(50% - 1.4rem);
      bottom: 0;
      position: absolute;

    }
    .image {
      display: block;
      border-radius: 50%;
      z-index: 0;
    }
    .image span::after {
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 0.05rem solid #145BAD;
      z-index: -1;
    }
  `;

  return (
    <section className="info-1-wrap" style={styles}>
      <h2>How often hearing should be checked</h2>
      <div className="images">
        <div className="image img-1">
          <span><img src="./images/img-1.jpg" alt="" /></span>
          <p>at birth</p>
        </div>
        <div className="image img-2">
          <span><img src="./images/img-2.jpg" alt="" /></span>
          <p>every 10 years</p>
        </div>
        <div className="image img-3">
          <span><img src="./images/img-3.jpg" alt="" /></span>
          <p>every 3 years</p>
        </div>
      </div>
    </section>
  );
};
