import'./Home.css';

  function Home() {
    return (
      <>
          <div className="w-screen flex justify-center">
              <div>
                  <div className="max-w-7xl flex flex-col items-center">
                      <h2 className='titulo'>Seja Bem Vindo!</h2>
                      <p>Compartilhe aqui suas experiências e curiosidades!</p>
                  </div>

                  <div className="max-w-7xl flex flex-col items-center">
                      <img 
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