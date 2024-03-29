import React from 'react';
// import { signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";

interface SignoutModalProps {
  showModal: boolean;
  onCloseModal: () => void;
}

const SignoutModal: React.FC<SignoutModalProps> = ({ showModal, onCloseModal }) => {
  const navigate = useNavigate(); // Move the useNavigate hook here

  // Sign out users from Firebase Authentication
  const handleSignOut = async () => {
    // const auth = getAuth();

    try {
      await signOut(auth);
      localStorage.removeItem('pic'); // Remove the image from local storage
      alert('Successfully signed out');
      onCloseModal(); // Close the modal after successful sign out
      navigate('/'); // Navigate to the home page or any other desired page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className={`fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 ${showModal ? '' : 'hidden'}`}>
      <div className="bg-white p-4 rounded-md">
        <p className="text-center text-gray-800 text-xl font-semibold mb-4">Do you want to sign out?</p>
        <div className="flex justify-center">
          <button className="bg-red-500 text-white py-2 px-4 rounded mr-2" onClick={handleSignOut}>
            Yes
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={onCloseModal}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignoutModal;
