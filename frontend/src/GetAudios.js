import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAudio } from "./redux/audioSlice";

const GetAudioList = () => {
  const dispatch = useDispatch();
  const audio = useSelector((state) => state.audio);
  const [fileBase64String, setFileBase64String] = useState("");

  useEffect(() => {
    dispatch(GetAudio());
  }, []);

  const decodeFileBase64 = (str) => {
    // from bytestream to percentage-encoding, to origin string.
    return decodeURIComponent(
      atob(str)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  };

  const decodeBase64 = decodeFileBase64(
    fileBase64String.substring(fileBase64String.indexOf(",") + 1)
  );

  return (
    <div className="rounded bg-purple p-3 my-2">
      <h3 className="text-center text-success lead ">
        <u className="fw-bold">Previously Saved Recordings</u>
      </h3>
      {audio?.audios
        ?.slice()
        .reverse()
        .map((item) => (
          <div key={item._id} >
            <h4 className="d-none">{item.audio}</h4>
            <audio src={item.audio} controls className="w-100" />
            <br />
            <span>
              <span className="fw-bolder">
                {" "}
                <p className="text-success">Date/Time</p>{" "}
              </span>{" "}
              <p className="text-warning">
                {" "}
                {new Date(item.createdAt).toLocaleString("en-US")}
              </p>{" "}
            </span>
            <hr className="m-2" />
          </div>
        ))}
    </div>
  );
};

export default GetAudioList;
