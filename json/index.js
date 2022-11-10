const data = {
    name : 'vaidehi',
    age  : 20,
    course: 'Mtech',
}

const jsonData = JSON.stringify(data);
console.log(jsonData);

const orgData = JSON.parse(jsonData);
console.log(orgData);