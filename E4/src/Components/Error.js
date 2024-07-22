import { useRouteError } from 'react-router-dom';

const Error = () => {

    const err = useRouteError();


  return (
    <div>
        <h1>error page</h1>
        <h2>{err.data}</h2>
    </div>
  )
}

export default Error;
