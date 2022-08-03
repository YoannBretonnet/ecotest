// == Style
import './styles.scss';
import {
    Box,
    Button

} from '@mui/material';

// import data
import { useSelector, useDispatch } from 'react-redux';
import { openCloseConnectionModal } from 'src/actions/authentification';

export default function sidebar({ text }) {
    const dispatch = useDispatch();
    const pointCoords = useSelector((state) => state.mapData.pointCoords);
    return (
        <Box component="main">
            <Box>
                <div className="details">{pointCoords.data.features.filter((option) => option.properties.title === "SuperChargeur").length} Bornes de recharge | {pointCoords.data.features.filter((option) => option.properties.title !== "SuperChargeur").length} Points d'intéret</div>
            </Box>
            <Box sx={{ margin: 'auto' }}>
                <Button onClick={() => dispatch(openCloseConnectionModal())} sx={{ fontSize: '10px', backgroundColor: '#6cc573', color: 'white' }}>{text}</Button>
            </Box>
        </Box>
    );
}