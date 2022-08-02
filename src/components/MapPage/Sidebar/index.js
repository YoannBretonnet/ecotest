// == Style
import './styles.scss';
import {
    Box,
    Button

} from '@mui/material';

// import data
import interestPointsData from '../data/interestPointsData.json';
import { useSelector, useDispatch } from 'react-redux';
import { openCloseConnectionModal } from 'src/actions/authentification';

export default function sidebar({ text }) {
    const dispatch = useDispatch();
    return (
        <Box component="main">
            <Box>
                <div className="details">2 Bornes de recharge | {interestPointsData.data.features.length} Points d'intéret</div>
            </Box>
            <Box sx={{ margin: 'auto' }}>
                <Button onClick={() => dispatch(openCloseConnectionModal())} sx={{ fontSize: '10px', backgroundColor: '#6cc573', color: 'white' }}>{text}</Button>
            </Box>
        </Box>
    );
}