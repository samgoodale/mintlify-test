import { NoteBox } from "/snippets/sdks/plain-callouts.jsx";

const Logging = (props) => {
  if (props.sec === "logging") {
    return <p>The SDK generates logs to reflect various internal processes and issues.</p>;
  }

  if (props.sec === "log_levels") {
    return <p>The SDK supports configuring limiting logging by a log level.</p>;
  }

  if (props.sec === "custom_handling_of_logs") {
    return (
      <>
        <p>The SDK writes its logs to the console output by default. This behaviour can be overridden.</p>
        <NoteBox>
          Logging limiting by a log level is performed apart from the log
          handling logic.
        </NoteBox>
      </>
    );
  }

  return null;
};

export default Logging;
