// This router receives a route from the user or from the URL.
// Based on this route, the router returns a different component.
// In our case, the components being returned are either Users or HelloWorld.
const router = (route) => {
    const hash = location.hash.replace('#', '');
    route = route || new URLSearchParams(hash).get('route');
    route = !route || route === 'null' ? 'hello' : route;

    location.hash = `?route=${route}`;

    return {
        users: Users,
        hello: HelloWorld,
        bob: () => 'Bob',
        jerry: () => 'Jerry',
    }[route];
};

// In order to make links on our page render new components instead
// of them requesting a new page, we have to override the links
// that have the special "data-link" attribute.  Links with this attribute
// will render a new component in the entry point.
document.addEventListener('click', (e) => {
    if ('link' in e.target.dataset) {
        // override default, so that we don't make new request
        e.preventDefault();

        // we extract the route for our router from the href attribute
        let route = e.target.href.split('/');
        route = route[route.length - 1];

        // render the HTML in the entry point based off the extracted route
        render(route);
    }
});
