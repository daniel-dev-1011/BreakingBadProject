import axios from "axios";
import { unknowError } from "../api/errors";

export const request = (url, method, params) => {
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: method,
    url: url
  }

  if (method.toLowerCase() == "get") {
    config.params = params
  } else {
    config.data = params ? params : undefined
  }

  return new Promise((resolve, reject) => {
    try {
      axios(config).then(res => {
        resolve(res)
      }).catch((err) => {
        if (err.response) {
          const { data } = err.response
          if (data && _.isArray(data.errors) && data.errors.length > 0) {
            reject({
              success: `${data.success}`,
              message: data.errors[0]
            })
            return
          }
        }
        reject(unknowError);
      })
    } catch (error) {
      reject(error)
    }
  });
}