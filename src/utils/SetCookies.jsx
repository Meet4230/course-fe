import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SetCookies = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [cookiesSet, setCookiesSet] = useState(false);

  useEffect(() => {
    const data = searchParams.get("data");

    if (data && !cookiesSet) {
      const {
        accessToken,
        refreshToken,
        accessTokenOptions,
        refreshTokenOptions,
      } = JSON.parse(decodeURIComponent(data));

      // Set the access token cookie
      document.cookie = `accessToken=${accessToken};${Object.entries(
        accessTokenOptions
      )
        .map(([key, value]) => `${key}=${value}`)
        .join(";")}`;

      // Set the refresh token cookie
      document.cookie = `refreshToken=${refreshToken};${Object.entries(
        refreshTokenOptions
      )
        .map(([key, value]) => `${key}=${value}`)
        .join(";")}`;

      setCookiesSet(true);
    }
  }, [searchParams, cookiesSet]);

  useEffect(() => {
    if (cookiesSet) {
      navigate("/dashboard");
    }
  }, [cookiesSet, navigate]);

  return <div>Setting cookies...</div>;
};

export default SetCookies;
