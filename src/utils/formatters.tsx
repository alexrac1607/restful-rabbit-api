export const handleStatusCodeText = (statusCode?: number): JSX.Element => {
  switch (statusCode) {
    case 200:
      return <span className="text-green-600">200: OK</span>;
    case 201:
      return <span className="text-green-600">201: Created</span>;
    case 204:
      return <span className="text-green-600">204: No Content</span>;
    case 400:
      return <span className="text-yellow-600">400: Bad Request</span>;
    case 401:
      return <span className="text-yellow-600">401: Unauthorized</span>;
    case 403:
      return <span className="text-yellow-600">403: Forbidden</span>;
    case 404:
      return <span className="text-yellow-600">404: Not Found</span>;
    case 405:
      return <span className="text-yellow-600">405: Method Not Allowed</span>;
    case 500:
      return <span className="text-red-600">500: Internal Server Error</span>;
    default:
      return <span className="text-red-600">Error</span>;
  }
};
