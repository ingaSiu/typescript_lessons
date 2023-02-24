// reactNode yra ne tik component, bet ir kitu tipu elementai

// pridedam type path, kad apsisaugoti, jei norim naujo path, reikia cia prideti
// pasirasom path, kurie jau egzistuoja

export type Route = {
  path: '/' | '/users';
  Component: () => JSX.Element;
};
