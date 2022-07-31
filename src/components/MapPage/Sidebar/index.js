// == Style
import './styles.scss';

// import data
import interestPointsData from '../data/interestPointsData.json';

export default function sidebar({text}) {

    return (
        <div className="sidebar">
            <div className="details">{interestPointsData.data.features.length} Bornes de recharge | {interestPointsData.data.features.length} Points d'intéret</div>
            <div className="sauvegarde">{text}</div>
        </div>
     
      );
}