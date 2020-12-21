const dropZone = document.querySelector('.drop-zone');
const browseBtn = document.querySelector('.browseBtn');
const fileInput = document.querySelector('#fileInput');

const host = "https://preshak.herokuapp.com/";
const uploadURL = `${host}api/files`;

dropZone.addEventListener('dragover', (e)=>{
    e.preventDefault();
    if(!dropZone.classList.contains('dragged')){
        dropZone.classList.add('dragged');
    }
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragged');
})

// removing dragged class once we drop the file
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragged');
    const files = e.dataTransfer.files;  // no. of files selected
    console.log(files);
    if(files.length){
        fileInput.files = files;
        uploadFile();
    }
})

fileInput.addEventListener("change", () => {
    uploadFile();
})

// adding file choosing option on clicking browse soan
browseBtn.addEventListener('click', (e)=>{
    fileInput.click();
});

const uploadFile = () => {
    const file = fileInput.files[0];
    const formData = new FormData()   // making a form object to store selected files in it
    formData.append("myfile",file)

    const xhr = new XMLHttpRequest();
    // onreadystate change when file is uploaded
    xhr.onreadystatechange = () =>{   
        // console.log(xhr.readyState);
        if(xhr.readyState === XMLHttpRequest.DONE){  // checking if file is uploaded or not
            console.log(xhr.response)
        }
    };
    xhr.open("POST",uploadURL);   // making POST request on upload url to formData
    xhr.send(formData)              
}