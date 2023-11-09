import { ReactNode,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HouseLine,FileText,Tag,PlusSquare,User,SignOut} from "@phosphor-icons/react";

import { AuthContext } from "../../context/AuthContext";

function Navbar() {

  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div
        className="w-full bg-primary text-white
                flex justify-center py-4"
      >
        <div className="container flex justify-between text-lg">
          <Link
            to="/home"
            className="text-2xl font-bold"
            title="Página Inicial"
          >
            <HouseLine size={32} weight="fill" />
          </Link>

          <div className="flex gap-4">
            <Link to="/postagens" className="hover:underline" title="Postagens">
              <FileText size={25} />
            </Link>
            <Link to="/temas" className="hover:underline" title="Temas">
              <Tag size={25} />
            </Link>
            <Link
              to="/cadastroTema"
              className="hover:underline"
              title="Cadastrar Temas"
            >
              <PlusSquare size={25} />
            </Link>
            <Link to="/perfil" className="hover:underline" title="Perfil">
              <User size={25} />
            </Link>
            <Link
              to=""
              onClick={logout}
              className="hover:underline"
              title="Sair"
            >
              <Link to="/" className="hover:underline">
                <SignOut size={32} weight="fill" />
              </Link>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return <>{component}</>;
}

export default Navbar;
