import Style from './descricao.module.css';

function Menu(props)
{
    return(
        <>
            <div className={Style.descricao}>
                <div className={Style.titulo}>
                    <span>{props.t1}</span>
                    <br />
                    <span>{props.d1}</span>
                </div>
                <div className={Style.titulo}>
                    <span>{props.t2}</span>
                    <br />
                    <span>{props.d2}</span>
                </div>
                <div className={Style.titulo}>
                    <span>{props.t3}</span>
                    <br />
                    <span>{props.d3}</span>
                </div>
            </div>
        </>
    );
}
export default Menu;