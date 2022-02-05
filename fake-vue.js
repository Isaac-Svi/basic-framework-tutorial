// dynamic data - when this changes, it should cause whole app to change
// The appearance of our HTML should match this data ALWAYS.
const data = {
    loading: true,
    users: [],
};

// self calling function to make data reactive
// this function overrides the default setters and getters of
// our data so that when we try setting the data, we also call render function.
// this render function replaces the html with updated html containing
// the new data.
(function makeDataReactive() {
    const localData = { ...data };

    for (const key in localData) {
        Object.defineProperty(data, key, {
            get() {
                return localData[key];
            },
            set(newValue) {
                localData[key] = newValue;
                render(); // <- This is the important thing. :)
            },
        });
    }
})();

// This render function's job is to put the generated HTML into the entry div.
// In our case, the entry div is a div with id of app.
// The render function renders the HTML returned by the router.
const render = (route = '') => {
    app.innerHTML = router(route)();
};

render();
