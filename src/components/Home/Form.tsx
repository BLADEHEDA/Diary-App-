import React, { useState, ChangeEvent,useEffect } from 'react';
import Button from '../shared/Button';
import Navbar from '../shared/Navbar';
import {db} from  "../../firebase/firebase"
import { addDoc, collection,getDocs } from "firebase/firestore"; 
import { Link,useNavigate } from 'react-router-dom';
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL,} from "firebase/storage";
import { storage } from '../../firebase/firebase';


export const Form = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ category?: string;
     description?: string;
     file?: string;
    }>({});
    const navigate = useNavigate();
    // define stae of new diary entry 
  const [newdiaryEntry, setNewdiaryEntry] = useState<{
    id: number;
    category: string;
    description: string;
    isPublic: boolean;
    selectedFile: string | null;
    // createdDate: object | null | Date;
  }[]>([]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform form validation
    const formErrors: { category?: string; description?: string; file?: string } = {};
    if (!category.trim()) {
      formErrors.category = 'Category is required';
    }
    if (!description.trim()) {
      formErrors.description = 'Description is required';
    }
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        setIsLoading(true); // Show loading indicator
        // Upload image to Cloud Storage and get the download URL
        const downloadURL = await handleimageUpload();

        // Add form values to the list
        const diaryEntry = {
          id: Math.floor(Math.random() * 1000),
          category,
          description,
          isPublic,
          selectedFile: downloadURL,
        };

        const addnewdiary = [diaryEntry, ...newdiaryEntry];
        setNewdiaryEntry(addnewdiary);

        // Upload data to Firebase
        await addDoc(collection(db, 'diaryEntries'), diaryEntry);

        console.log('Data uploaded to Firebase successfully');
        setNewdiaryEntry(addnewdiary);
        
        alert('Successfully Added Diary Entry');
        // Logging the form values
        console.log('Category:', category);
        console.log('Description:', description);
        console.log('Is Public:', isPublic);
        console.log('Selected File:', selectedFile);

        // Clearing the form inputs and errors
        setCategory('');
        setDescription('');
        setIsPublic(false);
        setSelectedFile(null);
        setErrors({});
        // Perform navigation
        navigate('/diary');
      } catch (error) {
        console.error('Error uploading data to Firebase', error);
        setIsLoading(false); // Hide loading indicator in case of error
      }
    }
  };


  // validate file upload 
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          file: "Only JPEG, PNG, and GIF images are allowed.",
        }));
        setSelectedFile(null);
        return;
      }
  
      // Validate file size
      const maxSize = 1 * 1024 * 1024; // 1MB
      if (file.size > maxSize) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          file: "Maximum file size allowed is 1MB.",
        }));
        setSelectedFile(null);
        return;
      }
  
      setSelectedFile(file);
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: undefined, // Reset the file error
      }));
    } else {
      setSelectedFile(null);
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: undefined, // Reset the file error
      }));
    }
  };


  const handleimageUpload = async (): Promise<string> => {
    if (selectedFile == null || !(selectedFile instanceof File)) return '';
// upload the image to cloud storage ,then get the download url 
    try {
      const storageRef = ref(storage, `images/${selectedFile.name}`);
      const snapshot = await uploadBytes(storageRef, selectedFile);
      const downloadURL = await getDownloadURL(snapshot.ref);

      console.log('Image URL fetched from Firestore:', downloadURL);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

// fetching fro  the firestore 
const fetchPost = async () => {
       
  await getDocs(collection(db, "category"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
              setCategory(newData[0]["option"]);      
      })
 
}
useEffect(() => {
  fetchPost();
}, []);

  return (
    <main className="w-full">
      <Navbar head="New entry" vector={localStorage.getItem('pic')} />
      <div className="flex px-5 justify-between text-[black] mt-3">
        <div className="font-[600] text-[1.65em]">Create new diary</div>
    <Link to ='/diary'  ><div className="font-[600] text-[1.75em] text-[black]">x</div>  </Link>    
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit} className="px-5">
          {/* select input field */}
          {/* <article className="mb-4">
            <div className="mb-2">
              <label htmlFor="" className="text-[1.25em] italic text-black">
                Category
              </label>
            </div>
            <select
              className="w-[100%] border-[0.2px] px-2 py-4 text-black text-[1em] rounded-[5px] border-black border-solid"
              name="Category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option className="hidden">Select Category</option>
              <option value="Fun">Fun</option>
              <option value="Home">Home</option>
              <option value="Family">Family</option>
              <option value="Spiritual">Spiritual</option>
              <option value="Health">Health</option>
              <option value="School">School</option>
              <option value="Work">Work</option>
              <option value="Others">Others</option>
            </select>
            {errors.category && (
              <p className="text-red-500">{errors.category}</p>
            )}
          </article> */}
          {/* // subjected to changes  */}

           <article className="mb-4"> 
            <div className="mb-2">
              <label htmlFor="" className="text-[1.25em] italic text-black">
                Category
              </label>
            </div>
              <select
                    className="w-[100%] border-[0.2px] px-2 py-4 text-black text-[1em] rounded-[5px] border-black border-solid"
                    name="Category"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
              >
                {Array.isArray(category) &&
                  category?.map((el: string, index: number) => {
                    return (
                      <option
                        value={el === "choose category" ? "" : el}
                        key={index}
                      >
                        {el}
                      </option>
                    );
                  })}
              </select>
              {errors.category && (
              <p className="text-red-500">{errors.category}</p>
            )}
              </article>
      
          {/* description input field */}
          <article className="mb-4">
            <div className="mb-2">
              <label className="text-[1.25em] italic text-black">
                Description
              </label>
            </div>
            <textarea
              placeholder="Enter description here"
              className="w-full border border-black border-solid px-3 rounded-[5px] h-[8em]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}
          </article>
          {/* image upload field */}
          <article className="mb-4">
            <div className="mb-2">
              <label className="text-[1.25em] italic text-black">
                Upload image (optional)
              </label>
              <input
                className="w-full border border-black border-solid rounded-[5px] h-[8em]"
                type="file"
                accept="image/jpeg, image/png, image/gif"
                onChange={handleFileChange}
              />
            </div>
            {errors.file && <p className="text-red-500">{errors.file}</p>}
          </article>
          {/* option section */}
          <article className="mb-4">
            <input
              type="checkbox"
              className="bg-black mr-3 h-[1em] w-[1em] mt-2"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
            />
            <label className="text-[1.25em] text-black">
              Is entry public
            </label>
          </article>
          {/* validating button */}
          <div className="btn mb-[5em]">
         {/* <Link to ='/diary'  > */}
             <Button type="submit" name="Save" />
             {/* </Link>  */}

          </div>
        </form>
      </div>
      {isLoading && (
          // Loading indicator JSX
          <div className="flex justify-center mt-4">
            <p className="text-black font-semibold">Loading...</p>
          </div>
        )}
    </main>
  );
};

export default Form;
