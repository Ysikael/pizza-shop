export default function basilikFetch(route) {
    return () => {
        const baseUrlApi =
            process.env.REACT_APP_BASE_URL_API || "http://localhost:3001";
        return fetch(`${baseUrlApi}/pizzas`).then((response) => response.json());
    };
}