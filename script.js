// ------------------------------ //
// Script - Made by XplosiON - v1 //
// ------------------------------ //
function ping() {
    // Pring the server
    const prompt = document.getElementById('prompt').value;
    const baseURL = document.getElementById('baseURL').value;
    localStorage.setItem("baseURL", baseURL);
    const reqBody = {
        name: prompt
    };
    const reqBodyString = JSON.stringify(reqBody);
    const apiUrl = `${baseURL}/demo/hello`;
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: reqBodyString,
    };

    fetch(apiUrl, fetchOptions)
        .then(resp => resp.json())
        .then(resp => {
            document.getElementById('jsonBody').innerHTML = resp.msg;
            console.log(resp);
        })
        .catch(error => {
            // Handle errors
            console.error("Error:", error);
        });
    // Cwww
}

function gen() {
    // Gen
    const prompt = document.getElementById('prompt').value;
    const baseURL = document.getElementById('baseURL').value;
    localStorage.setItem("baseURL", baseURL);
    const requestBody = {
        text: prompt,
        negative_prompt: "<easynegative>",
        seed: -1,
        guidance_scale: 7.5,
        sampler: "k_euler",
        is_anime: true,
        custom_embeddings: {
            "<easynegative>": easyfix
        }
    };
    // Convert the JSON body to a string
    const requestBodyString = JSON.stringify(requestBody);
    document.getElementById('jsonBody').innerHTML = requestBodyString;
    // Specify the API URL
    const apiUrl = `${baseURL}/txt2img/sd`;
    // Define the fetch options
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: requestBodyString,
    };

    // Send the API request
    fetch(apiUrl, fetchOptions)
        .then(response => {
            // Check if the response is successful (status code 2xx)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Check if the response contains a Content-Type header indicating an image
            const contentType = response.headers.get("Content-Type");
            if (contentType && contentType.startsWith("image")) {
                // If the response is an image, create an image element and set its source
                return response.blob().then(blob => {
                    const imageUrl = URL.createObjectURL(blob);

                    // Display the image on the website
                    const imageElement = document.createElement("img");
                    imageElement.src = imageUrl;

                    // Append the image element to the document body (you can modify this based on your HTML structure
                    document.getElementById('imgsDiv').appendChild(imageElement);
                });
            } else {
                // If the response is not an image, parse it as JSON
                return response.json().then(data => {
                    // Handle the API response data
                    console.log("API Response:", data);
                });
            }
        })
        .catch(error => {
            // Handle errors
            console.error("Error:", error);
        });
    
    // Continue here...
}

function rep(count) {
    for (let i = 0; i < count; i++) {
        gen();
    }
}