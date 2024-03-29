import React, { useState, ChangeEvent, useEffect } from 'react';
import Button from '../shared/Button';
import Navbar from '../shared/Navbar';
import { db } from '../../firebase/firebase';
import { addDoc, collection, getDocs,serverTimestamp } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/firebase';
import MoonLoader from 'react-spinners/ClipLoader';
import vector from '../../assets/Vector.png'
// define the options type
type Option = {
  id: string;
  option: string;
  category: string[];
};

export const Form = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ category?: string; description?: string; file?: string }>({});
 
  const navigate = useNavigate();
// define the idary entry datat types
  const [newdiaryEntry, setNewdiaryEntry] = useState<{
    id: number;
    category: string;
    description: string;
    isPublic: boolean;
    selectedFile: string | null;
  }[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
        setIsLoading(true);
        const downloadURL = await handleimageUpload();
   // define the diaryEntry
        const diaryEntry = {
          id: Math.floor(Math.random() * 1000),
          category,
          description,
          isPublic,
          selectedFile: downloadURL,
          date: serverTimestamp(), // Include the serverTimestamp here
        };
      // upload the diaryEntries data to the firestore 
        await addDoc(collection(db, 'diaryEntries'), diaryEntry);
        const addnewdiary = [diaryEntry, ...newdiaryEntry];
        console.log('Data uploaded to Firebase successfully');
        setNewdiaryEntry(addnewdiary);

        console.log('the diary Entry ', addnewdiary);
        
        alert('Successfully Added Diary Entry');
        console.log('Category:', category);
        console.log('Description:', description);
        console.log('Is Public:', isPublic);
        console.log('Selected File:', selectedFile);
      // reset the states of the form 
        setCategory('');
        setDescription('');
        setIsPublic(false);
        setSelectedFile(null);
        setImageURL(null); // Reset image preview
        setErrors({});
        navigate('/diary');
      } catch (error) {
        console.error('Error uploading data to Firebase', error);
        setIsLoading(false);
      }
    }
  };
// handle the file input field
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          file: 'Only JPEG, PNG, and GIF images are allowed.',
        }));
        setSelectedFile(null);
        return;
      }
// ensure a maximum size of the image is valid 
      const maxSize = 1 * 1024 * 1024; // 1MB
      if (file.size > maxSize) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          file: 'Maximum file size allowed is 1MB.',
        }));
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: undefined, // Reset the file error
      }));
// make the image to be previewed before beign uploaded 
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: undefined, // Reset the file error
      }));
      setImageURL(null);
    }
  };
// post image to cloud storage  
  const handleimageUpload = async (): Promise<string> => {
    if (selectedFile == null || !(selectedFile instanceof File)) return '';
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
// load categories from firestore
  const fetchPost = async () => {
    try {
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(db, 'category'));
      const newData: Option[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        option: doc.data().option,
        category: doc.data().category,
      }));
      setCategory(newData[0]['option']);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching category:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <main className="w-full">
          {/* conditionally display a default image in case of logged  */}
      <Navbar head="New entry" vector={localStorage.getItem('pic') || vector } />
      <div className="flex px-5 justify-between text-[black] mt-3">
        <div className="font-[600] text-[1.65em]">Create new diary</div>
        <Link to="/diary">
          <div className="font-[600] text-[1.75em] text-[black]">x</div>
        </Link>
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit} className="px-5">
            {/* categories inout field and options fetched from the firestore */}
          <article className="mb-4">
            <div className="mb-2">
              <label htmlFor="" className="text-[1.25em] italic text-black">
                Category
              </label>
            </div>
            <select
              className="w-[100%] border-[0.2px] px-2 py-4 text-black bg-[white] text-[1em] rounded-[5px] border-black border-solid"
              name="Category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {Array.isArray(category) &&
                category?.map((el: string, index: number) => (
                  <option className="bg-[white] text-[black]" value={el} key={index}>
                    {el}
                  </option>
                ))}
            </select>
            {errors.category && <p className="text-red-500">{errors.category}</p>}
          </article>
  {/* description input field */}
          <article className="mb-4">
            <div className="mb-2">
              <label className="text-[1.25em] italic text-black">Description</label>
            </div>
            <textarea
              placeholder="Enter description here"
              className="w-full border border-black bg-[white]  border-solid px-3 rounded-[5px] h-[8em]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {errors.description && <p className="text-red-500">{errors.description}</p>}
          </article>
   {/* image upload input field */}
          <article className="mb-4">
            <div className="mb-2">
              <label className="text-[1.25em] italic text-black">Upload image (optional)</label>
              <input
                className="w-full border border-black border-solid bg-[white]  rounded-[5px] h-[8em]"
                type="file"
                accept="image/jpeg, image/png, image/gif"
                onChange={handleFileChange}
              />
               {/* display the image choosen */}
              {imageURL && <img src={imageURL} alt="Preview" className=" mt-2 border w-full border-black " />}
            </div>
            {errors.file && <p className="text-red-500">{errors.file}</p>}
          </article>
      {/*checkbox input field   */}
          <article className="mb-4">
            <input
              type="checkbox"
              className="bg-black mr-3 h-[1em] w-[1em] mt-2"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
            />
            <label className="text-[1.25em] text-black">Is entry public</label>
          </article>

          <div className="btn mb-[5em]">
            <Button type="submit" name="Save" />
          </div>
        </form>
      </div>

      {isLoading && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-0">
          <div className="absolute top-[11em] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <MoonLoader color="black" size={70} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Form;
