// https://control.txtlocal.co.uk/#
// https://api.txtlocal.com/docs/

const apiKey = process.env.

fetch("https://api.txtlocal.com/POST", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        apikey: 
    })
})
