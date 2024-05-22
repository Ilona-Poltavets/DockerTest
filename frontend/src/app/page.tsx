const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

export default async function Home() {
  // console.log(`url: ${API_URL}`);
  // const result = await fetch(`${API_URL}/api/tests`, {
  //   headers: {
  //     Authorization: `Bearer  ${API_TOKEN}`,
  //     "Content-type": "multipart/form-data",
  //   },
  // });

  // const result = await fetch(`${API_URL}/api/tests`, {
  //   headers: {
  //     Authorization: `Bearer ${API_TOKEN}`,
  //     "Content-type": "multipart/form-data"
  //   },
  // });

  // const { data } = await result.json();
  // console.log(data);
  return (
    <div>Hello World</div>
  );
}