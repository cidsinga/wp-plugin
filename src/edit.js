import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, RadioControl } from '@wordpress/components';
import myImage1 from './images/infographic-1.png';
import myImage2 from './images/infographic-2.png';
import myImage3 from './images/infographic-3.png';
import myImage4 from './images/infographic-4.png';
import myImage5 from './images/infographic-5.png';




// let myImage1 = 'https://placehold.co/600x400?text=info1';
// let myImage2 = 'https://placehold.co/600x400?text=info2';
// let myImage3 = 'https://placehold.co/600x400?text=info3';
// let myImage4 = 'https://placehold.co/600x400?text=info4';
// let myImage5 = 'https://placehold.co/600x400?text=info5';

function MyBlockEdit({ attributes, setAttributes }) {
	const { selectedInfographic } = attributes;

	function onChangeInfographic(newInfographic) {
		setAttributes({ selectedInfographic: newInfographic });
	}



return (
		<>
		<InspectorControls>
			<PanelBody title="Infographic">
				<RadioControl
					label="Select infographic"
					selected={selectedInfographic}
					options={[
						{ label: 'Infographic 1', value: 'infographic-1' },
						{ label: 'Infographic 2', value: 'infographic-2' },
						{ label: 'Infographic 3', value: 'infographic-3' },
						{ label: 'Infographic 4', value: 'infographic-4' },
						{ label: 'Infographic 5', value: 'infographic-5' },
					]}
					onChange={onChangeInfographic}
				/>
			</PanelBody>
		</InspectorControls>
		<div { ...useBlockProps() }>
			<img src={selectedInfographic === 'infographic-1' ? myImage1 :
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
		</div>
		</>
);
}

export default MyBlockEdit;