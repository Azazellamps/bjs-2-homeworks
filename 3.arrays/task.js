function compareArrays(arr1, arr2) {
	let result;

	if (arr1.length != arr2.length) {
		result = false;
	} else {
		result = arr1.every((element, i) => element === arr2[i]);
	}

	return result;
}


function getUsersNamesInAgeRange(users, gender) {
	let rightUsers = users.filter(user => user.gender === gender);
	let getAge = rightUsers.map(user => user.age).reduce((acc, age) => acc + age, 0);
	if (isNaN((getAge / rightUsers.length))) {
		return 0;
	}
	return (getAge / rightUsers.length);
}
  
