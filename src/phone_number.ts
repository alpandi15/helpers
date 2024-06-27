export const replacePhoneNumber = (number: string) => {
    let phoneNumber: string | undefined = number;
    if (String(number?.charAt(0)) === '0') {
        phoneNumber = number?.slice(1);
    }
    if (String(number?.charAt(0)) === '6' && String(number?.charAt(1)) === '2') {
        phoneNumber = number?.slice(2);
    }
    if (
        String(number?.charAt(0)) === '+' &&
        String(number?.charAt(1)) === '6' &&
        String(number?.charAt(2)) === '2'
    ) {
        phoneNumber = number?.slice(3);
    }
    return phoneNumber;
};
