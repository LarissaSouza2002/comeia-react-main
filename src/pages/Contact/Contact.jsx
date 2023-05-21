import React, {useState} from "react";
import "./style-contact.css"


function Contact() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensage, setMensage] = useState("");

    function enviarFormulario(event) {
        event.preventDefault();

        console.log("Enviado com Sucesso!");
        
        const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensage: ${mensage}`;
        const numeroDoWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER;
        const linkWhatsApp = `https://wa.me/${numeroDoWhatsApp}?text=${encodeURIComponent(texto)}`;
        window.open(linkWhatsApp, '_blank');
    }

    function mascaraTelefone(event) {
        const texto = event.target.value;
        const textoApenasNumero = texto.replace(/\D/g, '').substring(0, 11);
            let telefoneFormatado = textoApenasNumero.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                if (textoApenasNumero.length < 11) {
                    telefoneFormatado = textoApenasNumero.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
                }
                setTelefone(telefoneFormatado);
    }

    return (
        <>

        <main>
            <form onSubmit={enviarFormulario}>

                <fieldset>
                    <div class="form-control">
                    <label for="username">Nome e Sobrenome</label>
                    <input 
                        type="text" 
                        id="username" 
                        required
                        minLength="2"
                        placeholder="Digite seu nome e sobrenome."
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                    </div>
                </fieldset>

                <fieldset>
                    <div class="form-control ">
                        <label for="email">Email</label>
                        <input 
                        type="text"
                        id="email" 
                        required
                        placeholder="Digite seu e-mail."
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div class="form-control"> 
                        <label for="telefone">Telefone</label>
                        <input 
                        type="text" 
                        id="telefone" 
                        required
                        placeholder="(99) 99999-9999" 
                        pattern="^\(\d{2}\) \d{5}-\d{4}$"
                        maxLength="15"
                        value={telefone}
                        onChange={mascaraTelefone} 
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <label for="mensage">Mensagem</label>
                        <textarea 
                        name="mensage" 
                        id="mensage" 
                        cols="60" 
                        rows="9" 
                        class="input-padrao"
                        value={mensage}
                        onChange={(event) => setMensage(event.target.value)}
                        />
                    </div>
                </fieldset>

                    <button id="button" type="submit">Enviar</button>                
            </form>
        </main>
        </>
    )
}
    
export default Contact;