import { useState } from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import BoxInsider from "components/box";

const ManagePostGallery =()=>{
    const [selectedFile, setSelectedFile] = useState(null);

const handleFileInputChange = (e) => {
  setSelectedFile(e.target.files[0]);
};

const handleFileUpload = async () => {
  if (selectedFile) {
    const storage = getStorage();
    const storageRef = ref(storage, `path/to/${selectedFile.name}`);
    await uploadBytes(storageRef, selectedFile);
    console.log('File uploaded successfully!');
  } else {
    console.log('No file selected.');
  }
};
    return(
    <BoxInsider>



    <div>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>


    </BoxInsider>



);
}
export default ManagePostGallery;