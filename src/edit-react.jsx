import { useBlockProps } from '@wordpress/block-editor';
import Infographic1 from './components/infographic1';
import Infographic2 from './components/infographic2';
import Infographic3 from './components/infographic3';
import Infographic4 from './components/infographic4';
import Infographic5 from './components/infographic5';
import './style.scss';

const MyBlockEdit = ({ attributes, setAttributes }) => {
  const { selectedInfographic } = attributes;

  let infographic = null;

  switch (selectedInfographic) {
    case 'infographic1':
      infographic = <Infographic1 />;
      break;
    case 'infographic2':
      infographic = <Infographic2 />;
      break;
    case 'infographic3':
      infographic = <Infographic3 />;
      break;
    case 'infographic4':
      infographic = <Infographic4 />;
      break;
    case 'infographic5':
      infographic = <Infographic5 />;
      break;
    default:
      infographic = <Infographic1 />;
  }

  return (
    <div { ...useBlockProps() }>
      <fieldset>
        <legend>Select infographic:</legend>
        <input type="radio" name="infographic" value="infographic1" checked={ selectedInfographic === 'infographic1' } onChange={ () => setAttributes({ selectedInfographic: 'infographic1' }) } />
        <label for="infographic1">Infographic 1</label>
        <br />
        <input type="radio" name="infographic" value="infographic2" checked={ selectedInfographic === 'infographic2' } onChange={ () => setAttributes({ selectedInfographic: 'infographic2' }) } />
        <label for="infographic2">Infographic 2</label>
        <br />
      </fieldset>
      {infographic}
    </div>
  );
};

export default MyBlockEdit;