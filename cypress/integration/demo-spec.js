//https://www.boredapi.com/documentation#endpoints-key

describe('Cypress API Demo Project', () => {
  context('Examples', () => {
    it('Gets a random activity', () => {
      cy.getActivity().then((response) => {
        expect(response.status).to.eq(200);

        expect(response.body)
          .to.be.an('object')
          .that.has.all.keys(
            'type',
            'key',
            'participants',
            'activity',
            'price',
            'link',
            'accessibility'
          );
      });
    });

    it('Gets an activity by key', () => {
      const activityKey = '5881028';

      cy.getActivityByKey(activityKey).then((response) => {
        expect(response.status).to.eq(200);

        expect(response.body.key).to.eq(activityKey);
      });
    });
  });

  context('Part 1', () => {
    it('Gets an activity by type', () => {
      // Add your logic to test getting an activity by type
      // Verify the type given matches the type returned in the response
    });

    it('Gets an activity by number of participants', () => {
      // Add your...
      // Verify...
    });

    it('Gets an activity based on a specified price', () => {
      // Add your logic to test getting a activity by a specified price (up to you what price you define)
      // Verify ....
    });

    it('Gets an activity based on a specified min price and max price', () => {
      // Add your logic to test getting a activity by a specified max price and min price
      // Verify the response returned has a price within the specified range
    });

    it('Gets an activity based on a specified accessibility number', () => {
      // Add your...
      // Verify...
    });

    it('Gets an activity based on a specified accessibility number range', () => {
      // Add your...
      // Verify...
    });
  });

  context('Part 2', () => {
    it('Gets a random activity *type* and makes a request using that activity type', () => {
      // Get a random activity type from the API and make a request with that same type
      // Verify that the response to the 2nd request has the same type you specified
      // This means you will first make a request to get an activity type, use the value to drive the 2nd request
    });

    it('Gets a random activity *price* and makes a request using that activity price', () => {
      // Add your...
      // Verify...
    });

    it('Gets 2 random activity *prices*, one min and one max, and requests an activity by price range ', () => {
      // Values to be used need to be from the API and not a dynamic number generator
      // You must make sure that the value to be used for MAX price is GREATER THAN MIN PRICE
      // Verify...
    });
  });
});
