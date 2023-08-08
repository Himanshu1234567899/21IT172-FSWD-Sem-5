function displayEnvVariableValue(variableName) {
    const variableValue = process.env[variableName]; 
    if (variableValue !== undefined) {
        console.log(`Value of ${variableName}: ${variableValue}`);
    } else { 
        console.log(`Environment variable ${variableName} is not defined.`); 
    }
}

const variableName = "PATH"; 
displayEnvVariableValue(variableName);
