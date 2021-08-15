import * as React from 'react';
import ErrorTemplate from 'templates/ErrorTemplate';

const NotFoundPage = () => (
  <ErrorTemplate
    status={404}
    type="Not Found"
    message="The link you clicked may have been broken or the page doesn't exist."
  />
);

export default NotFoundPage;
