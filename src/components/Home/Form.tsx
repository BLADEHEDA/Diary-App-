import React, { useState } from 'react';
import Button from '../shared/Button';
import Navbar from '../shared/Navbar';

const Form = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const formErrors = {};
    if (!category.trim()) {
      formErrors.category = 'Category is required';
    }
    if (!description.trim()) {
      formErrors.description = 'Description is required';
    }
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Logging the form values
      console.log('Category:', category);
      console.log('Description:', description);
      console.log('Is Public:', isPublic);
      console.log('Selected File:', selectedFile);

      // Alerting the form values
      alert(
        `Category: ${category}\nDescription: ${description}\nIs Public: ${isPublic}`
      );

      // Clearing the form inputs and errors
      setCategory('');
      setDescription('');
      setIsPublic(false);
      setSelectedFile(null);
      setErrors({});
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <main className="w-full">
      <Navbar head="New entry" vector={localStorage.getItem('pic')} />
      <div className="flex px-5 justify-between text-[black] mt-3">
        <div className="font-[600]  text-[1.65em]">Create new diary</div>
        <div className="font-[600] text-[1.75em]">x</div>
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit} className="px-5">
          {/* select input field */}
          <article className="mb-4">
            <div className="mb-2">
              <label htmlFor="" className="text-[1.25em] italic text-black">
                Category
              </label>
            </div>
            <select
              className="w-[100%] border-[0.2px]  px-2 py-4 text-black text-[1em]
            rounded-[5px]  border-black border-solid"
              name="Category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
                  <option selected="true" className='hidden' >Select language</option>
              <option value="1">Fun</option>
              <option value="2">Home</option>
              <option value="3">Family</option>
              <option value="4">Spriritual</option>
              <option value="5">Health</option>
              <option value="6">School</option>
              <option value="7">Work</option>
              <option value="8">Others</option>
            </select>
            {errors.category && (
              <p className="text-red-500">{errors.category}</p>
            )}
          </article>
          {/* descritpion input field */}
          <article className="mb-4">
            <div className="mb-2">
              <label className="text-[1.25em] italic text-black">
                Description
              </label>
            </div>
            <textarea
              placeholder="Enter description here"
              className="w-full  border border-black bprer-solid  px-3
            rounded-[5px] h-[8em]"
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
                className="w-full  border border-black border-solid
               rounded-[5px] h-[8em]"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </article>
          {/* option section */}
          <article className="mb-4">
            <input
              type="checkbox"
              className="bg-black mr-3 h-[1em] w-[1em] mt-2"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
            />
            <label className=" text-[1.25em] text-black">
              Is entry public
            </label>
          </article>
          {/* validating button */}
          <div className="btn mb-[5em]">
            <Button type="submit" name="Save" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Form;
