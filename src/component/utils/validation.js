export const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
};

export const validateFullName = (name) => {
    if(name.length <= 2){
        return false;
    };
    const fullNameRegex = /^[A-Za-z\s]+$/;
    return fullNameRegex.test(name);
};

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};