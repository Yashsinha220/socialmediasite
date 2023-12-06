import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function PasswordReset() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [validity, setValidity] = useState(null);
  const token = searchParams.get("token");
  const options = {
    method: "GET",
    url: "http://localhost:3000/forgotpass/validity/",
    params: { token: token },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setValidity(response.data.valid);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return token && validity ? (
    <div>app store</div>
  ) : (
    <div>link expires</div>
  );
}

export default PasswordReset;
