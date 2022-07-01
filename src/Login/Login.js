import React, { useEffect, useState } from "react";
import auth from "../Firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import {useForm} from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  // google sign in
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  // sign in with email password
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

     // form set
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user,navigate]);

    let signInError;

    if (error || gError) {
      signInError = (
        <p className="text-red-200"> {error?.message || gError?.message}</p>
      );
    }
    if (loading || gLoading) {
      return <p>Loading</p>
    }
  

      const onSubmit = (data) => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
      };

  return (
    <div className="flex h-screen justify-center items-center my-16">
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-2xl">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-400">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-400">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
                minLength: {
                  value: 6,
                  message: "password must be 6 characters or longer",
                },
              })}
            />

            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-400">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-400">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          {signInError}
          <input
            className="btn w-full max-w-xs"
            type="submit"
            value="Login"
          />
        </form>
        <p>
          <small>
            New Here?
            <Link to="/register" className="text-primary">
              Create A New Account
            </Link>
          </small>
        </p>
        <div className="divider">OR</div>
        <div className="text-center py-5">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            SignIn With Google
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
