

type ButtonPropsType={
    title: string
    onClickHandler?: ()=> void
    isDisabled?: boolean
    clssses?: string
}

export const Button = (props: ButtonPropsType)=>{

    return (
        <button 
        onClick={props.onClickHandler}
        disabled={props.isDisabled}
        className={props.clssses}
        >{props.title}</button>

    )
}