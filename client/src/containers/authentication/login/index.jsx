import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { auth, signInWithEmailAndPassword } from "../../../services/firebase-config";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, setSubmitting) => {
    try {
      const { email, password } = values;
      // await signInWithEmailAndPassword(auth, email, password);
      const { data } = await axios.post("http://localhost:4000/auth/login", { ...values });
      console.log("🚀 ~ file: index.jsx:15 ~ handleSubmit ~ data", data);
      setSubmitting(false);
      toast.success(data.message);
      localStorage.setItem("tokenOfOurApp", data.token);
      navigate("/dashboard");
    } catch (error) {
      setSubmitting(false);
      console.log("🚀 ~ file: index.jsx:15 ~ handleSubmit ~ error", error.message);
    }
  };

  let schema = yup.object().shape({
    password: yup.string().min(8).max(20).required(),
    email: yup.string().email().required(),
  });
  return (
    <div className='flex min-h-screen w-full flex-wrap content-center justify-center bg-gray-200 py-10'>
      <div className='flex shadow-md'>
        <div
          className='flex flex-wrap content-center justify-center rounded-l-md bg-white'
          style={{ width: "24rem", height: "32rem" }}
        >
          <div className='w-72'>
            <h1 className='text-xl font-semibold'>Welcome back</h1>
            <small className='text-gray-400'>Welcome back! Please enter your details</small>
            <Formik
              initialValues={{ email: "", password: "" }}
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
                      Sign in
                    </button>
                  </div>
                </form>
              )}
            </Formik>

            <div className='text-center'>
              <span className='text-xs font-semibold text-gray-400'>Don't have account?</span>
              <Link to='/register' className='text-xs font-semibold text-purple-700'>
                Sign up
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
            Inu Bayu Aji
          </a>{" "}
          and ispired by{" "}
          <a
            target='_blank'
            href='https://dribbble.com/shots/17564792-Log-in-page-Untitled-UI'
            className='text-purple-700'
          >
            this
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
