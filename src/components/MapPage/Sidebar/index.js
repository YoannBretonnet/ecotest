// == Style
import './styles.scss';

// import data
import interestPointsData from '../data/interestPointsData.json';

export default function sidebar() {

    return (
        <div className="sidebar">
            <div className="details">{interestPointsData.data.features.length} Bornes de recharge | {interestPointsData.data.features.length} Points d'intéret</div>
            <div className="sauvegarde">Pour sauvegarder votre trajet, <u>connectez-vous!</u></div>
        </div>
     
      );
}