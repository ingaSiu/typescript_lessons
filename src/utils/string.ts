export const getFullName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

// parasyti funkcija, kuri prideda zvaigzdutes pagal password ilgi
//function that coverts string to * e.g. rokas => *****
export const hidePassword = (password: string): string => {
  const hiddenPsw = '*'.repeat(password.length);
  return hiddenPsw;
};
