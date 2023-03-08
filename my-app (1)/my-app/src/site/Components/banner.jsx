import React from 'react';

function Banner(){
    return <section id="banner"> 
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <h1>Uma plataforma para seus treinos ficarem muito melhores e fáceis de usar.</h1>
                    <h4>Gerencie seus treinos em um único lugar.</h4>
                    <a href="/app/novaconta" className="btn btn-outline-light btn-lg btn-banner">Criar uma conta</a>
                    <a href="/app" className="btn btn-outline-light btn-lg btn-banner">Fazer Login</a>
                </div>                   
                </div>
       
            </div>
        
    </section>;
  }

export default Banner;