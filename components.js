const Users = () => {
    // Here, we have a basic example of reusing components
    // HelloWorld is inside of Users

    return `
        <div>hi ${HelloWorld()}</div>
        <div id="users">
            ${
                !data.loading
                    ? data.users
                          .map((user) => `<div>${user.name}</div>`)
                          .join('')
                    : 'Users are loading...'
            }
        </div>
    `;
};

const HelloWorld = () => 'Hello World';

setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) => {
            console.log(data.users, users);
            data.users = users;
        })
        .catch((err) => console.log(err))
        .finally(() => (data.loading = false));
}, 1000);
