import Style from './CarroFoto.module.css';

function Fotos(props)
{
    return(
        <>
            <div className={Style.carrofundo}>
                <img  className= {Style.carro} src={props.carro} alt=""/> 
            </div>
        </>
    );
}
export default Fotos;