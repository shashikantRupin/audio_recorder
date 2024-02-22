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
    return decodeURIComponent(
      atob(str)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  };

  const decodedBase64 = decodeFileBase64(
    fileBase64String.substring(fileBase64String.indexOf(",") + 1)
  );

  // Check if audio or audio.audios is undefined before mapping
  const audioList = audio?.audios || [];

  return (
    <div className="rounded p-3 my-2 shadow-lg bg-purple text-white">
      <h3 className="text-center text-success lead">
        <u>Previously Saved Recordings</u>
      </h3>
      {audioList
        .slice()
        .reverse()
        .map((item) => (
          <div key={item._id}>
            <h4 className="d-none">{item.audio}</h4>
            <audio src={item.audio} controls className="w-100" />
            <br />
            <span>
              <span className="fw-bolder">Date/Time</span>{" "}
              {new Date(item.createdAt).toLocaleString("en-US")}{" "}
            </span>
            <hr className="m-2" />
          </div>
        ))}
    </div>
  );
};

export default GetAudioList;
