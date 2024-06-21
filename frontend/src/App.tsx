import { useAsync } from "react-use";

const BASE_URL = "http://localhost:1337/api";
function App() {
  const postsState = useAsync(async () => {
    const response = await fetch(BASE_URL + "/interview-posts");
    const data = await response.json();

    return data;
  }, ['/interview-posts']);

  if (postsState.loading) {
    return <div>loading..</div>;
  }

  if (postsState.error) {
    return <div>error</div>;
  }

  return <div>{JSON.stringify(postsState.value)}</div>;
}

export default App;
