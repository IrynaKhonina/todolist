<<<<<<< HEAD
type ButtonPropsType = {
	title: string
	onClick?:()=> void
	className?: string
}

export const Button = ({title, onClick, className}: ButtonPropsType) => {
	return (
		<button className={className} onClick={onClick}>{title}</button>
	)
}
=======


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
>>>>>>> 85d3a372dc239156b7f2c35fe7f163946c2bf4ff
