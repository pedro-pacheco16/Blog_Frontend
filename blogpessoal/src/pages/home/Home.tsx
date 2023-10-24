import'./Home.css';

  function Home() {
    return (
      <>
          <div className='main'>
              <div>
                  <div className='secundaria'>
                      <h2 className='titulo'>Seja Bem Vindo!</h2>
                      <p>Compartilhe aqui suas experiências e curiosidades!</p>
                  </div>

                  <div className='secundaria'>
                      <img 
                          className='img'
                          src=".\public\innovation-amico.png"
                          alt="Imagem de uma lampada do conhecimento" 
                          width="400px"
                      />
                  </div>
              </div>
          </div>
      </>
  )
}

export default Home