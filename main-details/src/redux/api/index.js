export const searchList  = async () => {
    const response = await fetch('http://localhost:7070/api/services');  //`${import.meta.VITE_SEARCH_URL}`
    if (!response.ok) { 
        throw new Error(response.statusText);
    }

    return await response.json();
}

export const searchValue = async (search) => {
    const params = new URLSearchParams({q: search});
    const response = await fetch(`http://localhost:7070/api/services/${search}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}