import {useSelector, useDispatch} from 'react-redux';

function Main() {
    const nickname = useSelector ((state) => state.auth.connectionModal.nickname)
    return (
        <div className='mainProfile'>
            <p>Bienvenue {nickname} !</p><br></br>  
            <p><em>Page en cours de développement</em></p>
        </div>
    );
}

export default Main;