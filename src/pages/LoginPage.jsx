import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

const LoginPage = () => {
  return (
<div className="flex min-h-screen bg-white">
      <div className="w-1/2 m-6 flex items-center justify-center">
        <div
          className="relative bg-cover bg-center rounded-bl-[50%] rounded-tr-[50%] h-4/5 w-4/5 overflow-hidden"
          style={{ backgroundImage: "url('https://www.fragrancex.com/blog/wp-content/uploads/2020/03/areas-to-apply-fragrance-hero-1.jpg')" }}
        >
          <div className="flex flex-col justify-center text-center h-full p-10 text-white bg-black/40 rounded-xl">
            <h2 className="text-3xl font-bold">Let's Get Started!</h2>
            <p className="mt-2">Create your account and unlock the full potential of Fragranzia.</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md space-y-4">
          <div className="flex justify-between gap-4 mb-4">
                        <button className="w-full border rounded px-4 py-2 flex items-center justify-center gap-2">
                            <FaGoogle className="text-xl text-red-500" />
                            Google
                        </button>
                        <button className="w-full border rounded px-4 py-2 flex items-center justify-center gap-2">
                            <FaFacebookF className="text-xl text-blue-600" />
                            Facebook
                        </button>
                    </div>
          <p className="text-center text-sm text-gray-500">or sign in with email</p>
          <input type="text" placeholder="Enter your username" className="w-full px-4 py-2 border rounded" />
          <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded" />
          <div className="text-right text-sm">
            <a href="#" className="text-blue-600">Forgot Password?</a>
          </div>
          <button className="w-full bg-blue-900 text-white py-2 rounded">Log in</button>
          <p className="text-center text-sm text-gray-500">
            Don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
