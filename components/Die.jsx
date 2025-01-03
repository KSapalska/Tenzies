export default function Die(props){

    const buttonClass= props.isHeld? 'die-active' :'die-inactive'
    return (
        <>
        <button 
            className={buttonClass}
            onClick={()=>props.hold(props.id)}
        >{props.value}</button>
        </>
    )
}