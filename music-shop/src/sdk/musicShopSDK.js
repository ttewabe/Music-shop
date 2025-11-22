const API_BASE_URL = import.meta.env.VITE_API_URL; // Replace with actual API Gateway URL

export async function uploadImage(claimId, file) {
  const formData = new FormData();
  formData.append("claimId", claimId);
  formData.append("file", file);

  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }
  return await response.json();
}

export async function retrieveImage(claimId) {
//   const response = await fetch(`${API_BASE_URL}/retrieve?claimId=${claimId}`, {
//     method: "GET",
//   });

console.log("Fetching image for Api:", API_BASE_URL);
 const response = await fetch(`https://picsum.photos/id/${claimId}/200/300`, {
    method: "GET",
  });
console.log("Response received from fetch:", response.url);
  if (!response.ok) {
    throw new Error("Retrieve failed");
  }
  const data = await response.url;
  console.log("Data received from fetch:", data);
  return data;
//   return data.imageBase64; // Lambda should return base64 image data. When we say Lambda should return base64 image data, it means the image file stored in S3 is converted into a Base64-encoded string before sending it back to the client.
}