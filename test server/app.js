const url = "http://localhost:3000/users";
// create user
async function createUser(name, id, email) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name: name, id: id, email: email }),
    });
    const result = await res.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

createUser("therealzoux", 500, "therealzoux@gmail.com");

async function deleteUser(id) {
  try {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    const result = await res.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

//deleteUser(150);

async function updateUser(id) {
  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    const result = await res.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
//updateUser(1219);

async function displayUsers() {
  try {
    const res = await fetch(url);
    const result = await res.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

displayUsers();
