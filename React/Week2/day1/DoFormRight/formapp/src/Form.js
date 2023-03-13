import {yupResolver} from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";
import * as yup from "yup";
export const Form = () => {
    
    const onSubmit = (data) => {
        console.log(data);
    }
    //using yup for validation
    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(), 
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required(),
    });
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            type="text" placeholder="Full Name..."
            {...register("fullName")}
             />
            <input type="email" placeholder="Email..."
            {...register("email")}
             />
            <input type="Age" placeholder="Age.." 
                {...register("age")}
            />
            <input type="password" placeholder="Password..."
            {...register("password")}
             />
            <input type="password" placeholder="Confirm Password..."
            {...register("confirmPassword")}
             />
            <button type="submit">Submit</button>

        </form>
    );
}