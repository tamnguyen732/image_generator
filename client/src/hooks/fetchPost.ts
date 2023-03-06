interface Args {
  url: string;
  prompt?: string;
  photo?: string;
}

const useFetch = async ({ url, prompt, photo }: Args) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt,
      photo
    })
  };
  try {
    const response = await fetch(url, config);
    if (response.ok) {
      const result = await response.json();

      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

export default useFetch;
