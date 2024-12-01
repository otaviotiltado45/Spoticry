export const validateEmail = (email) => {
    return re.test(String(email).toLowerCase());
  };
  