import { WarningBox } from "/snippets/sdks/plain-callouts.jsx";

const ActivityTrackingInterval = (props) => {
  if (props.sec === "description") {
    return (
      <>
        <p>
          The <code>activityTrackingIntervalMillisecond</code> parameter is
          designed to help reduce battery consumption and network usage.
          However, changing its value can have <strong>significant side effects</strong>{" "}
          that you should carefully consider.
        </p>
        <p>Review its impact on the following features:</p>
        <ol>
          <li>
            <strong>
              <a href="https://help.kameleoon.com/assets/triggers/create-a-trigger/#visiting-behavior">
                Elapsed time triggers
              </a>
            </strong>
            : If the configured elapsed time is shorter than the tracking
            interval, the trigger will not fire as expected.
          </li>
          <li>
            <strong>
              <a href="https://help.kameleoon.com/assets/segments/create-a-segment/#visiting-behavior">
                Elapsed time segments
              </a>
            </strong>
            : If the elapsed time is shorter than the tracking interval, users
            may not be included in the segment as intended.
          </li>
          <li>
            <strong>
              <a href="https://help.kameleoon.com/assets/goals/create-a-goal/#time-spent">
                Time spent goals
              </a>
            </strong>
            : If the elapsed time is shorter than the tracking interval, the
            goal may never be reached.
          </li>
          <li>
            <strong>
              <a href="https://help.kameleoon.com/experiment-analytics/analyze-results/results-page-settings/#filter-audience">
                Time elapsed since last visit in the results page
              </a>
            </strong>
            : Measurements for &quot;time elapsed since last visit&quot; become
            less precise when the elapsed time is close to or below the
            tracking interval.
          </li>
          <li>
            <strong>
              <a href="https://help.kameleoon.com/experiment-analytics/troubleshooting/data-discrepancies/#how-visits-and-visitors-are-counted">
                Visits count
              </a>
            </strong>
            : A new visit is created after 30 minutes of inactivity. If the
            tracking interval is longer than 30 minutes, a new visit will be
            created at each tracking interval.
          </li>
        </ol>
        <WarningBox>
          Setting <code>activityTrackingIntervalMillisecond</code> to{" "}
          <code>0</code> disables periodic activity tracking entirely. In this
          configuration, only a single activity event is sent at application
          startup, which renders all of the features listed above unusable.
        </WarningBox>
      </>
    );
  }

  return null;
};

export default ActivityTrackingInterval;
