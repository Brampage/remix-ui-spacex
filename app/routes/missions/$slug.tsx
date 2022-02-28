import { useLaunches } from '../missions';

export default function MissionSlug() {
  const loaderData = useLaunches() || null;

  console.log(loaderData);
  return (
    <div>
      <h2>Details</h2>
      {!loaderData ? (
        'No Data Found...'
      ) : (
        <>
          <h1>{loaderData?.name}</h1>
          <p>
            <strong>Details:</strong> {loaderData?.details}
            <br />
            <strong>Date:</strong> {loaderData?.date_local}
            <br />
            <strong>Success:</strong> {loaderData?.success ? 'YES' : 'NO'}
            <br />
            {
              loaderData?.links?.youtube_id && 
                <div>
                  <br />
                  <iframe
                    width="420"
                    height="315"
                    src={`https://www.youtube.com/embed/${loaderData?.links?.youtube_id}`}
                  ></iframe>
                </div>
            }
          </p>
        </>
      )}
    </div>
  );
}
