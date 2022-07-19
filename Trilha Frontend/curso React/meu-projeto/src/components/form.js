import { useState } from 'react'
function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)  
        console.log("Usuário Cadastrado!")  
    }

    const [name, setName] = useState('Andrea')

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" value={name} onChange = {(e) => setName(e.target.value)}></input>
                    
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}


export default Form