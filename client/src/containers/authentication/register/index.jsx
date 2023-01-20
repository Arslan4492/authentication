import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import { auth, createUserWithEmailAndPassword } from "../../../services/firebase-config";
import axios from "axios";
import { AppLoader } from "../../../components";
import { useState } from "react";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (values, setSubmitting) => {
    try {
      setIsLoading(true);
      const { email, password } = values;
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      const { data } = await axios.post("http://localhost:4000/auth/register", {
        ...values,
        firebaseId: user.uid,
      });
      console.log("🚀 ~ file: index.jsx:15 ~ handleSubmit ~ data", data);
      setSubmitting(false);
      toast.success(data.message);
      setIsLoading(false);
      navigate("/login");
    } catch (error) {
      setSubmitting(false);
      setIsLoading(false);
      toast.error(error.message);
      console.log("🚀 ~ file: index.jsx:15 ~ handleSubmit ~ error", error.message);
    }
  };

  let schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(8).max(20).required(),
    email: yup.string().email().required(),
  });
  if (isLoading) return <AppLoader />;
  return (
    <div className='flex min-h-screen w-full flex-wrap content-center justify-center bg-gray-200 py-10'>
      <div className='flex shadow-md'>
        <div
          className='flex flex-wrap content-center justify-center rounded-l-md bg-white'
          style={{ width: "24rem", height: "32rem" }}
        >
          <div className='w-72'>
            <h1 className='text-xl font-semibold'>Welcome to bootcamp</h1>
            <small className='text-gray-400'>Thank you for coming today</small>
            <Formik
              initialValues={{ username: "", email: "", password: "" }}
              validationSchema={schema}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values, setSubmitting);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form className='mt-4' onSubmit={handleSubmit}>
                  <div className='mb-3'>
                    <label className='mb-2 block text-xs font-semibold'>Username</label>
                    <input
                      type='text'
                      id='username'
                      name='username'
                      placeholder='Enter your full name'
                      className='block w-full rounded-md border border-gray-300 py-1 px-1.5 text-gray-500 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700'
                      onChange={handleChange} //setUsername()
                      value={values.username} //username
                    />
                    <p className='text-sm text-red-600'>
                      {errors.username && touched.username && errors.username}
                    </p>
                  </div>

                  <div className='mb-3'>
                    <label className='mb-2 block text-xs font-semibold'>Email</label>
                    <input
                      type='email'
                      name='email'
                      placeholder='Enter your email'
                      className='block w-full rounded-md border border-gray-300 py-1 px-1.5 text-gray-500 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700'
                      onChange={handleChange}
                      value={values.email}
                    />
                    <p className='text-sm text-red-600'>{errors.email && touched.email && errors.email}</p>
                  </div>

                  <div className='mb-3'>
                    <label className='mb-2 block text-xs font-semibold'>Password</label>
                    <input
                      type='password'
                      name='password'
                      placeholder='*****'
                      className='block w-full rounded-md border border-gray-300 py-1 px-1.5 text-gray-500 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700'
                      onChange={handleChange}
                      value={values.password}
                    />
                    <p className='text-sm text-red-600'>
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>

                  <div className='mb-3'>
                    <button
                      className='mb-1.5 block w-full rounded-md bg-purple-700 px-2 py-1.5 text-center text-white hover:bg-purple-900'
                      type='submit'
                      disabled={isSubmitting}
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              )}
            </Formik>

            <div className='text-center'>
              <span className='text-xs font-semibold text-gray-400'>Already have an account?</span>
              <Link to='/login' className='text-xs font-semibold text-purple-700'>
                Sign in
              </Link>
            </div>
          </div>
        </div>

        <div
          className='flex flex-wrap content-center justify-center rounded-r-md'
          style={{ width: "24rem", height: "32rem" }}
        >
          <img
            className='h-full w-full rounded-r-md bg-cover bg-center bg-no-repeat'
            src='https://i.imgur.com/9l1A4OS.jpeg'
          />
        </div>
      </div>

      <div className='mt-3 w-full'>
        <p className='text-center'>
          Made by{" "}
          <a target='_blank' href='https://www.instagram.com/_inubayuaji/' className='text-purple-700'>
            Arslan Ali
          </a>{" "}
          and inspired by{" "}
          <a
            target='_blank'
            href='https://dribbble.com/shots/17564792-Log-in-page-Untitled-UI'
            className='text-purple-700'
          >
            me
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
