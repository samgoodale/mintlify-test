const StarterKit = (props) => {
  if (props.sec === "starter_kit_description") {
    return (
      <p>
        To help with getting started, Kameleoon provides a starter kit and demo
        application to test the SDK. The starter kit includes a fully
        configured app with examples demonstrating how SDK methods can be used
        in an app. The starter kit, demo application, and detailed instructions
        are available at <props.ui.Ref x={props.c.StarterKit}/>
      </p>
    );
  }

  return null;
};

export default StarterKit;
