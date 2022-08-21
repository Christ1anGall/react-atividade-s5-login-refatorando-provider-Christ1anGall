import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../schema";
import { AuthContext, IuseAuth } from "../provider/auth";
import { useContext } from "react";

export interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useContext<IuseAuth>(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: UserData) => {
    signIn(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("email")} />
      {errors.email?.message}
      <input type="password" {...register("password")} />
      {errors.password?.message}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
