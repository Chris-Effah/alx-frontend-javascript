export function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const successfulResponse = true;

            if (successfulResponse) {
                resolve('Data from API');
            }
            else {
                reject(new Error('failed to fetch data from API'));
            }
        }, 2000);
    });
}