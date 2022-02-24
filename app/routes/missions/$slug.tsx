import {useLoaderData} from 'remix';

export async function loader({params}) {
  const slug = params.slug;

  let res = await fetch('https://api.spacexdata.com/v4/launches');
  res = await res.json();

  if (slug) {
    return res.find((element) => element?.name === slug);
  } else {
    return null;
  }
}

export default function MissionSlug() {
  const loaderData = useLoaderData() || null;

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
