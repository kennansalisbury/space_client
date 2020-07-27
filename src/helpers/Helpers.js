// ---------- Helper Functions --------------- //

//error catch
const catchError = (err, messageFunction) => {
    console.log(err)
    messageFunction('Sorry, there has been an error fetching this data. Please try again later.')
}

//fetch api data
const fetchData = (url, setDataFunction, setMessageFunction) => {
    fetch(url)
    .then(response => 
        response.json()
        .then(data => {
            setDataFunction(data)
        })
        .catch(err => catchError(err, setMessageFunction))
    )
    .catch(err => catchError(err, setMessageFunction))
}


export {catchError, fetchData}