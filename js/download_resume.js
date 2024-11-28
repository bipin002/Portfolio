$(document).ready(function(){
    $("#downloadresume").on('click',function(e){
    e.preventDefault();
    
     var fileUrl = 'Images/image/resume_download/Bipin_DotNet_2024.pdf'; 
     var fileName = 'Bipin_DotNet_2024.pdf'; 
     // Create a temporary link element
     var a = document.createElement('a');
     a.href = fileUrl;
    
     // Set the download attribute with the file name
     a.download = fileName;
    
     // Append the link to the body (required for Firefox)
     document.body.appendChild(a);
    
     // Simulate a click on the link
     a.click();
    
     // Remove the link after the download
     document.body.removeChild(a);
    });
    });