import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cadastro from './pages/cadastro/Cadastro';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import FormularioTema from './components/temas/formularioTema/FormularioTema';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import FormularioPostagem from './components/postagens/formularioPostagens/FormularioPostagens';
import Perfil from './pages/perfil/Perfil';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <div className='min-h-[80vh]'>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/temas" element={<ListaTemas />} />
                        <Route path="/cadastroTema" element={<FormularioTema />} />
                        <Route path="/editarTema/:id" element={<FormularioTema />} />
                        <Route path="/postagens" element={<ListaPostagens />} />
                        <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
                        <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
                        <Route path="/perfil" element={<Perfil />} />


                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </ AuthProvider>
    );
}

export default App;