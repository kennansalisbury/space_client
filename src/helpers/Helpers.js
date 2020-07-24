// ---------- Helper Functions --------------- //

const catchError = (err, messageFunction) => {
    console.log(err)
    messageFunction('Sorry, there has been an error fetching this data. Please try again later.')
}

export {catchError}