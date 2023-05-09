import { useBlockProps } from '@wordpress/block-editor';
import myImageA from './images/infographic-1.png';
import React from 'react';


export default function save({ attributes }) {
  const { selectedInfographic } = attributes;

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

	let myImage2 = 'https://placehold.co/600x400?text=info2';
	let myImage3 = 'https://placehold.co/600x400?text=info3';
	let myImage4 = 'https://placehold.co/600x400?text=info4';
	let myImage5 = 'https://placehold.co/600x400?text=info5';

	return (
		<>
		{myImageA}
		<div { ...useBlockProps.save() }>
		<img src={selectedInfographic === 'infographic-1' ? <InfoGraphic1 /> :
			selectedInfographic === 'infographic-2' ? myImage2 :
			selectedInfographic === 'infographic-3' ? myImage3 :
			selectedInfographic === 'infographic-4' ? myImage4 :
			myImage5}
			alt={selectedInfographic === 'infographic-1' ? 'myImage1' :
			selectedInfographic === 'infographic-2' ? 'myImage2' :
			selectedInfographic === 'infographic-3' ? 'myImage3' :
			selectedInfographic === 'infographic-4' ? 'myImage4' :
			'myImage5'}
		/>


			{selectedInfographic === 'infographic-1' ? <InfoGraphic1 /> :
			selectedInfographic === 'infographic-2' ? <p>Image2</p>  :
			selectedInfographic === 'infographic-3' ? <p>Image3</p>  :
			selectedInfographic === 'infographic-4' ? <p>Image4</p>  :
			<p>Image5</p> }


	</div>
	</>
	);
}
