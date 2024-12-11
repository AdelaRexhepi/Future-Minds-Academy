import {useForm} from "react-hook-form";

function SignUpForm(){
    const { register, handleSubmit } =  useForm();

    function submitForm(data){
        console.log(data);
    }

    return(
    <>
        <section>
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <label>Username</label>
                    <input type="text" {...register("username"),{required: "Username is required"}}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" {...register("email"),{required: "Email is required"}}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" {...register("password"),{required: "Password is required"}}/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" {...register("confirmPassword"),{required: "Confirm password is required"}}/>
                </div>
                <button type="submit"></button>
            </form>
        </section>
    </>
    )
    
}
export default SignUpForm;