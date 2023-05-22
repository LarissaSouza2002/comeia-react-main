import React from "react";
import "./style-Home.css";


function Home(props) {
    const { resumo, experienciaAcademica, experienciaProfissional } = props.curriculun;

    if (!resumo || !experienciaAcademica || !experienciaProfissional){
        return <p>Carregando...</p>
    }

    return (
        <>
    <section className="section">
            {/* <div className="card-container">
                <div className="info-card"> */}
                    <h3 id="resumo"> Resumo:</h3>
                    <p id="text">{resumo}</p>
                {/* </div>
            </div> */}

            {/* <div className="card-container">
                <div className="info-card"> */}
                    <h3 id="academica"> Acadêmica:</h3>
                    <p>
                        {experienciaAcademica.map((item, index) =>(
                        <li key={index}>
                            <b>({item.anoInicio} - {item.anoFim})</b> {item.titulo};
                            </li>
                        ))}
                    </p>
                {/* </div>
            </div> */}

            {/* <div className="card-container">
                <div className="info-card" style={{marginBottom: "85px"}}> */}
                    <h3 id="profissional"> Profissional:</h3>
                    <p>
                    {experienciaProfissional.map((item, index) =>(
                        <li key={index}>
                            <b>({item.anoInicio} - {item.anoFim})</b> {item.titulo};
                            </li>
                        ))}
                    </p>
                {/* </div>
            </div> */}
        </section>
        </>
    )
}

export default Home;