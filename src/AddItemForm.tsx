import {Button} from "./Button";
import {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormPropsType ={
    addItem: (title:  string)=>void
}

export const AddItemForm =({addItem}:AddItemFormPropsType)=>{
    const [itemTitle, setItemTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const changeItemTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setItemTitle(event.currentTarget.value)
    }
    const addItemOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (event.key === 'Enter') {
            addItemHandler()
        }
    }
    const addItemHandler = () => {
        if (itemTitle.trim() !== '') {
            addItem(itemTitle.trim(),)
            setItemTitle('')
        } else {
            setError('Title is required')
        }
    }
    return (
        <div>
            <input
                className={error ? 'error' : ''}
                value={itemTitle}
                onChange={changeItemTitleHandler}
                onKeyUp={addItemOnKeyUpHandler}
            />
            <Button title={'+'} onClick={addItemHandler}/>
            {error && <div className={'error-message'}>{error}</div>}
        </div>
    )
}