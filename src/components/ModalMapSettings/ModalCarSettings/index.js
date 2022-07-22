// == Import
// import { useSelector, useDispatch } from 'react-redux';
// import {  } from 'src/store/action';
import { openCloseCarModal, changeMapSettingInputValue } from 'src/actions/mapSettings';
import data from 'src/assets/data/car.json';
import { useSelector, useDispatch } from 'react-redux';

// == Style
import './styles.scss';

import {
  TextField,
  IconButton,
} from '@mui/material';

import { BiChevronRight } from 'react-icons/bi';

// ==Component
import ModalElement from 'src/components/ModalElement';

function getFilteredCar(cars, brandInput) {
  return cars.filter((option) => option.brand === brandInput);
}

// == Composant
function ModalCarSettings({ reducerRoute }) {
  const dispatch = useDispatch();
  const { brandsValue, carValue } = useSelector((state) => state.mapSettings.carSettingsModal);
  const modalElement = 'carSettingsModal';
  const inputBrandElement = 'brandsValue';
  const inputCarElement = 'carValue';
  return (
    <ModalElement
      dispatchCall={openCloseCarModal}
      modalElement={modalElement}
      reducerRoute={reducerRoute}
    >
      <h1 className="modal-title">Quel est votre véhicule ?</h1>
      <form
        className="modal-form-connection"
        onSubmit={((event) => {
          event.preventDefault();
          console.log('coucou');
        })}
      >
        <TextField
          id="outlined-select-brands"
          select
          label="Marque"
          value={brandsValue}
          onChange={(event) => dispatch(changeMapSettingInputValue(event.target.value, inputBrandElement, modalElement))}
          SelectProps={{
            native: true,
          }}
        >
          {data.brands.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-brands"
          select
          label="Modèle"
          value={carValue}
          onChange={(event) => dispatch(changeMapSettingInputValue(event.target.value, inputCarElement, modalElement))}
          SelectProps={{
            native: true,
          }}
        >
          {getFilteredCar(data.car, brandsValue).map((option) => (
            <option key={option.model} value={option.model}>
              {option.model}
            </option>
          ))}
        </TextField>
        <IconButton sx={{ color: 'black' }} type="submit">
          <BiChevronRight size="8vh" />
        </IconButton>
      </form>
    </ModalElement>
  );
}

// == Export
export default ModalCarSettings;
