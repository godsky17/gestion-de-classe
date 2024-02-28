import {fetchUsers} from "functions.js";

fetchUsers('users.js').then(data => console.log(data))