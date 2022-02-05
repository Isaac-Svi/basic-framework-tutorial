const state = {
    number1: Math.random().toFixed(2),
    count: 0,
};

const setState = (obj) => {
    for (const key in obj) {
        state[key] = obj[key];
    }
    render();
};

const increment = () => {
    setState({ count: state.count + 1, number1: Math.random().toFixed(2) });
};

const Component = () => {
    const { number1, count } = state;

    return `
        <div>
            <span class="number1">${number1}</span>
            <span class="count">${count}</span>
            <button onclick="increment()">
                Increment count
            </button>
        </div>
        `;
};

const render = () => {
    const x = Component();
    app.innerHTML = x;

    console.log(x);
};

render();
