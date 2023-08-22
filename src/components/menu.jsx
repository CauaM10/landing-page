import Style from './menu.module.css';

function Menu(props)
{
    return(
        <>
            <div className={Style.menu}>
                <img className={Style.logo} src={props.logo} alt=""/> 
                <h1 className={Style.nome}>{props.nome}</h1>
            </div>
        </>
    );
}
export default Menu;