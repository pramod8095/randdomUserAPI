import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Incre.css";
export default function RandomUser({ API }) {
  const [user, setUser] = useState();
  const [pagenumber, setPagenumber] = useState(1);
  const [userinfo, setUserinfo] = useState([]);
  const getUserData = async (number) => {
    let { data } = await axios.get(`${API}?page=${number}`);
    return data;
  };
  const getuserDetails = (userinf) => {
    let {
      name: { title, first, last },
    } = userinf;
    return `${title}. ${first} ${last}`;
  };

  const getPicture = (userinf) => {
    let {
      picture: { large },
    } = userinf;
    return large;
  };

  const load = () => {
    getUserData(pagenumber).then((user) => {
      setUser(JSON.stringify(user, null, 2));
      const newResults = [...userinfo, ...user.results];
      setUserinfo(newResults);
      setPagenumber(user.info.page + 1);
    });
  };
  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <div>
        {userinfo.map((userinf, idx) => {
          return (
            <div key={idx}>
              <img src={getPicture(userinf)} alt="#" />
              <p>{getuserDetails(userinf)}</p>
            </div>
          );
        })}
      </div>
      <button onClick={() => load()} className="btn">
        Get another user
      </button>
    </div>
  );
}
