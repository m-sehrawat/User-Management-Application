export const formatDateAndTime = (timestamp) => {
    const dateObj = new Date(timestamp);
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    // Format date as dd-mm-yyyy
    const formattedDate = `${day}-${month}-${year}`;
    // Format time as tt:ss AM/PM
    const formattedTime = `${hours > 12 ? hours - 12 : hours}:${minutes} ${hours >= 12 ? "PM" : "AM"}`;
    return `${formattedDate}, ${formattedTime}`;
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