import  { useState } from 'react';
import Button from '../shared/Button';
import Navbar from '../shared/Navbar';

export const Form = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  // const [errors, setErrors] = useState({});
  const [errors, setErrors] = useState<{ category?: string; description?: string }>({});
  // create new diary entry on submit 
  // const [newdiaryEntry, setNewdiaryEnrty ] = useState([])
  const [newdiaryEntry, setNewdiaryEnrty] = useState<{ id: number; category: string; description: string; isPublic: boolean; selectedFile: string }[]>([])

  const handleSubmit = (e:any) => {
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
      // add form values to the list 
     const diaryEntry={
        id:Math.floor(Math.random()*10),
        category,
        description,
        isPublic,
        selectedFile
      }
      const addnewdiary = [diaryEntry , ...newdiaryEntry ];
      setNewdiaryEnrty(addnewdiary);
      console.log('=============== array value =====================');
      console.log(addnewdiary);
      console.log('============== state value ======================');
      console.log(newdiaryEntry)
    



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

  const handleFileChange = (e:any) => {
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
                  <option  className='hidden' >Select language</option>
              <option value="Fun">Fun</option>
              <option value="Home">Home</option>
              <option value="fAMILY">Family</option>
              <option value="Spiritual">Spriritual</option>
              <option value="Heakth">Health</option>
              <option value="School">School</option>
              <option value="Work">Work</option>
              <option value="Others">Others</option>
            </select>

            {/* {errors.category && (
              <p className="text-red-500">{errors.category}</p>
            )} */}
         {(errors as any).category && (
            <p className="text-red-500">{(errors as any).category}</p>
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
            {/* {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )} */}
               {(errors as any).description && (
             <p className="text-red-500">{(errors as any).description}</p>
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
      {/*  
      subjected to changes  */}
      {
        newdiaryEntry.map((entry)=>{ const {id,category,description,selectedFile}=entry
      return(
        <section key={id} className='mb-[10em] ' >
          <p>{category} </p>
          <p>{description} </p>
          <img src={selectedFile} alt="" />
        </section>
      )
      }  )
      }
      {/* end of the changes  */}
    </main>
  );
};
export default Form;
