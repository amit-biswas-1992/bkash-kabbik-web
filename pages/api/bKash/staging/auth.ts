// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { log } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next';
const superagent = require("superagent");

// type Data = {
//   name: string
// }

export default async function handler(
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
  const reqBody = JSON.stringify(req.body);

  if (requestMethod == 'POST') {

    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: reqBody,
    // };
    // const url = 'http://localhost:3000/bKash/auth';

    // try {
      // const response = await fetch(url, requestOptions);

    //   if (response.ok) {
    //     res.status(200).json(response.body);
    //   } else {
    //     res.status(401).json(response.statusText);
    //     console.log(response.statusText);

    //   }
    // } catch (err) {
    //   console.error("Error:", err);

    // }

      // if (response.ok) {
      //   const data = await response.json();
        // res.status(200).json(data);
    //     console.log('Response:', data);
    //   } else {
    //     throw new Error('Error: ' + response.status);
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }

    superagent.post('https://api.kabbik.com/v3/bkash/bKash/staging/auth')
      .send(req.body)
      .set('Accept', 'application/json')
      .then((respon: any) => {
        try {
    console.log('shoeb vai', respon.body);
    console.log(respon.status);
    console.log(respon.text);
    console.log(respon.message);
            if (respon.status == 200 || respon.status == 201) {
              res.status(200).json(respon.body);
            } else {
              res.status(401).json(respon.message);
              // console.log('saim',respon.message);

            }
          } catch (err) {
            res.status(401).json(respon.message);

          }
        });
    }
    else {
      res.status(200).json({ errorMessage: 'Wrong Responese!' });

  }

}
