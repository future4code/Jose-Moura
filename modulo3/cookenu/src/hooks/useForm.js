import {useState} from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);
    const onChangeInput = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const clear = () => {
        setForm(initialState);
    }

    return(form, initialState, clear)
}

export default useForm;