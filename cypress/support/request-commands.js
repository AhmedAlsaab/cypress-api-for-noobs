export const getActivity = () => {
  cy.api({
    url: '/activity/',
    method: 'GET',
  });
};

export const getActivityByKey = (activityKey) => {
  cy.api({
    url: '/activity/',
    method: 'GET',
    qs: {
      key: activityKey,
    },
  });
};
