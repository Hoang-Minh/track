import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  // console.log("track form name: ", name);

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        ></Input>
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording}></Button>
        ) : (
          <Button title="Start" onPress={startRecording}></Button>
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length > 0 ? (
          <Button title="Save Recording" onPress={saveTrack}></Button>
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
