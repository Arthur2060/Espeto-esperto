import "./Principais.css"
import Prato from './Prato'

function Principais() {
    return (
        <div id="pratos-principais">
            <ul>
                <Prato 
                        imagen="Prato principal.png"
                        nome="Prato Principal" 
                        descricao="Descrição do prato"
                        ingredientes={[
                            "ingrediente 1",
                            "ingrediente 2",
                            "ingrediente 3",
                        ]} />
                
                <Prato 
                        imagen="Bife welingthon.png"
                        nome="Prato Principal" 
                        descricao="Descrição do prato"
                        ingredientes={[
                            "ingrediente 1",
                            "ingrediente 2",
                            "ingrediente 3",
                        ]} />
                
                <Prato 
                        imagen="Bife comum.png"
                        nome="Prato Principal" 
                        descricao="Descrição do prato"
                        ingredientes={[
                            "ingrediente 1",
                            "ingrediente 2",
                            "ingrediente 3",
                        ]} />
            </ul>
        </div>
    )
}

export default Principais