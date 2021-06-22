import { useHistory } from 'react-router-dom'
import illustration from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'

import '../styles/auth.scss'

export default function Home() {
    const history = useHistory();

    function signIn() {

    }

    function handleCreateRoom() {
        history.push('/rooms/new')
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustration} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salar de Q&amp;A ao vivo</strong>
                <p>Tire as duvidas da sua audiência em tempo real </p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do google " />
                        Crie uma sala com o Google
                    </button>
                    <div className="separator" >Ou entre em uma sala</div>
                    <form >
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>

                </div>

            </main>
        </div>
    )
}