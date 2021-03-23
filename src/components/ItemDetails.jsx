import { useParams } from 'react-router-dom';

export default function ItemDetails() {
  const { id } = useParams();

  return (
    <>
      <h1>
        Detail de item
      </h1>
      <h1>
        c est id :
        {id}
      </h1>
    </>
  );
}
