import Menu from './components/menu';
import logo from './components/Image/logo.png';
import Fotoscar from './components/Image/carro-gtr.png';
import Fotos from './components/CarroFoto';
import Descricoes from './components/Descricao'
import Rodape from './components/rodape';
import redes from './components/Image/redes sociais.png'
import nissan from './components/Image/nissan-logo.png'
function App() {  
  return (
    <>
      <Menu logo={logo} nome="GT-R NISMO"></Menu>
      <Fotos carro= {Fotoscar} ></Fotos>
      <Descricoes t1="DESEMPENHO NAS PISTAS, PRONTO PARA AS ESTRADAS" d1="
O emblema NISMO é por onde passa a experiência de corrida da Nissan para criar emoções inigualáveis na estrada." t2="
DESIGN AERODINÂMICO" d2="As peças de fibra de carbono ajudam a reduzir o peso e a resistência ao mesmo tempo que aumentam a eficiência aerodinâmica." t3="UMA ORGULHOSA HERANÇA DE CORRIDA" d3="Uma bandeira quadriculada foi acenada pela primeira vez para um modelo do GT-R NISMO em 1936 e desde então nós seguimos nas pistas."></Descricoes>
      <Rodape img1={redes} img2={nissan}></Rodape>

      
    </>
  );
}
export default App;
