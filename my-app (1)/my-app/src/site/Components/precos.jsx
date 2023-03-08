import React from 'react';

function Precos(){
    return <section id="preco">
        <div className="container">

            <div className="row text-center">
                <div className="titulo">
                    <h1>Planos e Preços</h1>
                    <p>Comece seus treinos com matricula gratuita e também a primera avaliacao fisica.</p>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header"><h1>Medium</h1></div>
                        <div className="card-body">
                            <h2>R$ 54,99</h2>
                            <p>Para 3 dias na semana</p>
                            <p>Suporte com personal</p>
                            <button className="btn btn-lg btn-outline-primary">Começar Agora</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h1>Pro</h1>
                        </div>
                        <div className="card-body">
                            <h2>R$ 59,99<small className="text-muted"> /mês</small></h2>
                            <p>Para 5 dias na semana</p>
                            <p>Suporte com personal</p>
                            <button className="btn btn-lg btn-outline-primary">Assinar Agora</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h1>Premium</h1>
                        </div>
                        <div className="card-body">
                            <h2>R$ 64,99<small className="text-muted"> /mês</small></h2>
                            <p>Para 6 dias na semana</p>
                            <p>Suporte com personal</p>
                            <button className="btn btn-lg btn-outline-primary">Assinar Agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
  }

export default Precos;