// == Style
import './styles.scss';
import {
  Box,
  Button,

} from '@mui/material';

// import data
import { useSelector, useDispatch } from 'react-redux';
import { openCloseConnectionModal } from 'src/actions/authentification';

export default function sidebar({ text }) {
  const dispatch = useDispatch();
  const pointCoords = useSelector((state) => state.mapData.pointCoords);
  return (
    <Box
      component="aside"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', marginTop: '2vh'}}
    >
      <p className="details">{pointCoords.data.features.filter((option) => option.properties.title === 'SuperChargeur').length} Bornes de recharge | {pointCoords.data.features.filter((option) => option.properties.title !== 'SuperChargeur').length} Points d'intéret</p>
      <Box sx={{ width: 'fit-content' }}>
        <Button onClick={() => dispatch(openCloseConnectionModal())} sx={{ fontSize: '10px', backgroundColor: '#6cc573', color: 'white' }}>{text}</Button>
      </Box>
    </Box>
  );
}
