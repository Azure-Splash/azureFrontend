async function login(email, password){ 
    console.log(email, password);

    console.log(process.env.REACT_APP_BACKEND_URL)

    let result = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/users/login",
      // "http://localhost:3005/users/login",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email, password: password}),
      }
    );

	let data = await result.json();

    console.log(data);

	return data;

}

module.exports = {login}