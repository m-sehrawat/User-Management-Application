export const getCurrentDate = () => {
    const date = new Date();
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

export const isInputFormValid = (payload) => {
    for (key in payload) {
        if (payload[key] === '') return false;
    }
    return true;
}

export const setToast = (toast, title, status, duration = 2000, description) => {
    toast({
        title,
        description,
        status,
        duration,
        isClosable: true,
        position: 'bottom'
    });
};