
const API_TOKEN = 'f9c4f84b095b8003c8b7990220e4de38';

const HEADERS = {
    'Authorization': `Token token=${API_TOKEN}`
};

export async function fetchQuotes(page = 1) {
    const url = `/api/favqs/api/quotes?page=${page}`;
    try {
        const response = await fetch(url, { headers: HEADERS });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching quotes:", error);
        return null;
    }
}

export async function fetchRandomQuote() {
    const url = '/api/favqs/api/qotd';
    try {
        const response = await fetch(url, { headers: HEADERS });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.quote;
    } catch (error) {
        console.error("Error fetching random quote:", error);
        return null;
    }
}