// ------------------------------ //
// Script - Made by XplosiON - v1 //
// ------------------------------ //
function ping() {
    // Ping the server
    const prompt = document.getElementById('prompt').value;
    const baseURL = document.getElementById('baseURL').value;
    localStorage.setItem("baseURL", baseURL);
    const reqBody = {
        name: prompt
    };
    const reqBodyString = JSON.stringify(reqBody);
    const apiUrl = `${baseURL}/demo/hello`;
    const fo = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: reqBodyString,
    };

    fetch(apiUrl, fo)
        .then(resp => resp.json())
        .then(resp => {
            document.getElementById('jsonBody').innerHTML = resp.msg;
            console.log(resp);
        })
        .catch(error => {
            // Handle errors
            console.error("Error:", error);
        });
}

function gen() {
    // Generate image
    const prompt = document.getElementById('prompt').value;
    const baseURL = document.getElementById('baseURL').value;
    localStorage.setItem("baseURL", baseURL);
    const reqBody = {
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
    const reqBodyString = JSON.stringify(reqBody);
    document.getElementById('jsonBody').innerHTML = reqBodyString;
    const apiUrl = `${baseURL}/txt2img/sd`;
    const fo = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: reqBodyString,
    };

    fetch(apiUrl, fo)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(`HTTP error! Status: ${resp.status}`);
            }
            const contentType = resp.headers.get("Content-Type");
            if (contentType && contentType.startsWith("image")) {
                return resp.blob().then(blob => {
                    const imageUrl = URL.createObjectURL(blob);
                    const imageElement = document.createElement("img");
                    imageElement.src = imageUrl;
                    document.getElementById('imgsDiv').appendChild(imageElement);
                });
            } else {
                return resp.json().then(data => {
                    console.log("API Response:", data);
                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function rep(count) {
    for (let i = 0; i < count; i++) {
        gen();
    }
}