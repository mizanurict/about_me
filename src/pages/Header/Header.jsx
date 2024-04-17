import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-12 items-center shadow-xl p-4 rounded-lg m-4">
            <div className="lg:col-span-1 border-4 p-2 mx-auto rounded-full border-zinc-600">
                <img className="rounded-full" src="https://i.postimg.cc/jjGSS89h/user-Profile.jpg" alt="profile picture" />
            </div>
            <div className="lg:col-span-2 mx-auto ">
                <h1 className="text-2xl font-bold mb-5">Md. Mizanur Rahman</h1>
                <div className="space-y-3"> 
                    <p className="text-gray-600 flex items-center gap-4"><FaPhoneAlt /> <span>+88017 49812970</span></p>
                    <p className="text-gray-600 flex items-center gap-4"><FaEnvelope /> <span><a href="mailto:mizanurictiu@gmail.com">mizanurictiu@gmail.com</a></span></p>
                    <p className="text-gray-600 flex items-center gap-4"><FaMapMarkerAlt className="text-xl" /> <span>Section-7, Uttara, Dhaka</span></p>
                    
                </div>
                <div className="text-gray-600 flex items-center gap-4 mt-6">
                    <Link to="https://www.facebook.com/mizanurictiu" target="_blank" ><FaFacebook className="text-2xl" /></Link>
                    <Link to="https://github.com/mizanurict" target="_blank" ><FaGithub className="text-2xl" /></Link>
                    <Link to="https://www.linkedin.com/in/mizanurictiu/" target="_blank" ><FaLinkedin className="text-2xl" /></Link>
                    </div>
            </div>
        </div>
    );
};

export default Header;