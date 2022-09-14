export const customFecth = (res) => {
    return new Promise((resolve, rejet) => {
        setTimeout(() => {
            resolve(res)
        }, 2000);
    });
};