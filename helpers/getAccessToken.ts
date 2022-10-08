export const { access_token } = await (
  await fetch(`${process.env.NEXT_PUBLIC_PETFINDER_API_URL}/oauth2/token`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: process.env.NEXT_PUBLIC_PETFINDER_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_PETFINDER_CLIENT_SECRET,
    }),
  })
).json();