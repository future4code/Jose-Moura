import {useState} from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const onChangeInput = (event) => {
        const {value, name} = event.target
    setForm({...form, [name]: value})

        //setForm({...form, [event.target.name]: event.target.value})
    }
    const clear = () => {
        setForm(initialState);
    }

    return [form, onChangeInput, clear]
}

export default useForm;