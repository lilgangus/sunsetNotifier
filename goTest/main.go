package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    url := "https://api.sunrisesunset.io/json?lat=44.571651&lng=-123.277702&date=today"

    // Create a new HTTP request
    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        panic(err)
    }

    // Send the HTTP request and get the response
    client := http.DefaultClient
    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    // Decode the JSON response
    var data map[string]interface{}
    err = json.NewDecoder(resp.Body).Decode(&data)
    if err != nil {
        panic(err)
    }

    // Log the "results" property of the response
    fmt.Println(data["results"])
}