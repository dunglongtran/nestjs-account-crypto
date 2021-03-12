export const getTemplate = () => {
  return {
    firstName: {
      faker: 'name.firstName',
    },
    lastName: {
      faker: 'name.lastName',
    },
    country: {
      faker: 'address.country',
    },
    createdAt: {
      faker: 'date.past',
    },
    username: {
      function: function () {
        return (
          this.object.lastName.substring(0, 5) +
          this.object.firstName.substring(0, 3) +
          Math.floor(Math.random() * 10)
        );
      },
    },
    email: {
      function: function () {
        const emailProvider = ['yandex.com', 'gmail.com', 'yahoo.com'];
        return `${this.object.username}@yandex.com`;
      },
    },
  };
};
