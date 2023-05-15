// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const superagent = require("superagent");

// type Data = {
//   name: string
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

//   const myHeaders = new Headers();

//   const raw = JSON.stringify({
//     user_id: localStorage.getItem("user_id"),
// });

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//   };
//   const url = 'https://api.kabbik.com/v3/bkash/bKash/auth';
  
//   try {
//     const fetchResponse = await fetch(url, requestOptions);

//     const data = await fetchResponse.json();
//     data.status = fetchResponse.status;
//     return data;
//   } catch (e) {
//     return e;
//   }


  var requestMethod = req.method;
  const body = JSON.stringify(req.body);
  if (requestMethod == 'POST') {
    superagent.post('https://api.kabbik.com/v3/bkash/bKash/auth')
      .send(req.body)
      .set('Accept', 'application/json')
      .then((respon: { body: any; }) => {
        res.status(200).json(respon.body);
      });
  }
  else {
    res.status(200).json({ errorMessage: 'Wrong Responese!' });
  }
}
