
  const validateImg = (e) => {
    const imgFile = e.target.files[0];
    if(imgFile > 1048576) {
      return alert("Max file size is 1mb")
    
    } else {
      setImage(imgFile);
      setImagePreview(URL.createObjectURL(imgFile))
    }
}

const uploadImage = async () => { 
    const imgData = new FormData();
    imgData.append('file', image);
    imgData.append('cloud_name', 'dtasfpf37');
    imgData.append('upload_preset', 'chat-app')
    try {
      setUploadImg(true)
      let res = await fetch('https://api.cloudinary.com/v1_1/dtasfpf37/image/upload',{
        method: 'post',
        body: imgData
      })
      const urlData = await res.json();
      setUploadImg(false);
      return urlData.url
    } catch (err) {
      setUploadImg(false);
      console.log(err)
      alert("Upload failed")
    }
  }

  const handleSubmit =  async (e) => {
    e.preventDefault();
    if(!image) return alert('Please upload your profile picture')
    const url = await uploadImage(image)
    console.log(url)
  };

