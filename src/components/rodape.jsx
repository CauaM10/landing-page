import Style from './rodape.module.css';

function Rodape(props)
{
    return(
        <>
            <div className={Style.rodape}>
                <img className= {Style.img1} src={props.img1} alt="" />
                <img className= {Style.img2} src={props.img2} alt="" />
            </div>
        </>
    );
}
export default Rodape;