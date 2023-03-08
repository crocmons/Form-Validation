const form = document.querySelector("form"); 
form.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    let isValid = true; 
    const pipelineName = document.querySelector("#pipelineName"); 
    const pipelineNameError = document.querySelector("#pipelineNameError"); 
    if (pipelineName.value.length < 5 || /[^a-zA-Z0-9]/.test(pipelineName.value) || /^[-_+]/.test(pipelineName.value)) { 
        pipelineNameError.textContent = "Pipeline name must be at least 5 characters long and can only contain alphanumeric characters"; 
        isValid = false; 
    } else { 
        pipelineNameError.textContent = ""; 
    } 
    
    const projectName = document.querySelector("#projectName"); 
    const projectNameError = document.querySelector("#projectNameError"); 
    if (projectName.value.length < 5 || /[^a-zA-Z0-9]/.test(projectName.value) || /^[-_+]/.test(projectName.value)) { 
        projectNameError.textContent = "Project name must be at least 5 characters long and can only contain alphanumeric characters"; 
        isValid = false; 
    } else { 
        projectNameError.textContent = ""; 
    } 
    
    const bucketName = document.querySelector("#bucketName"); 
    const bucketNameError = document.querySelector("#bucketNameError"); 
    if (bucketName.value.length < 5 || /[^a-zA-Z0-9]/.test(bucketName.value) || /^[-_+]/.test(bucketName.value)) { bucketNameError.textContent = "Bucket name must be at least 5 characters long and can only contain alphanumeric characters"; 
    isValid = false; 
} else { 
    bucketNameError.textContent = ""; 
} 

    const credentials = document.querySelector("#credentials"); 
    const credentialsError = document.querySelector("#credentialsError"); 
    if (credentials.value.length < 5 || /[^a-zA-Z0-9]/.test(credentials.value) || /^[-_+]/.test(credentials.value)) { credentialsError.textContent = "Credentials name must be at least 5 characters long and can only contain alphanumeric characters"; 
    isValid = false; 
} else { 
    credentialsError.textContent = ""; 
} 
    const runEvery = document.querySelector("#runEvery"); 
    const runEveryError = document.querySelector("#runEveryError"); 
    if (runEvery.value.length < 1 ) { runEveryError.textContent = "Run Every must be a Number"; 
    isValid = false; 
} else { 
    runEveryError.textContent = ""; 
} 

})