import { hera, globalOptions } from 'hera-js';
import { logger } from 'juno-js';

globalOptions.url = 'https://graphqlzero.almansi.me/api';

const main = async () => {
  const { data } = await hera({
    query: `
      query {
        post(id: $id) {
          id
          title
          body
        }
      }
    `,
    variables: {
      id: 1,
    },
  });
  logger.info(data);
};

main();
