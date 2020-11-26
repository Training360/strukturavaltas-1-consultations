console.log(document.querySelector('.hidden'));

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
}

const template = `
    <div class="user hidden">
        <p>Firstname: ${user.firstName}</p>
        <p>Lastname: ${user.lastName}</p>
        <p>Age: ${user.age}</p>
    </div>
`

document.querySelector('body').insertAdjacentHTML('beforeend', template);
console.log(document.querySelector('.user'));