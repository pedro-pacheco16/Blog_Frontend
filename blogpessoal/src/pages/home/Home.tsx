import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalPostagens/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-secondary flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Sejam Bem vindos(as)!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalPostagem />
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="artificial-intelligence-animate.svg"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>

      <ListaPostagens />
    </>
  );
}

export default Home;
