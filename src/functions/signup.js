async function signup(email, password, suburb, firstName, lastName, phoneNumber){ 

    let result = await fetch(
      // process.env.REACT_APP_BACKEND_URL + "/users/login",
      "http://localhost:3005/users/",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email, password: password, suburb: suburb, firstName: firstName, lastName: lastName, phoneNumber: phoneNumber}),
      }
    );

	let data = await result.json();

    console.log(data);

	return data;

}

module.exports = {signup}