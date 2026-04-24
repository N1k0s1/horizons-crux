import "../App.css";

export default function EventDetails() {
  return (
    <div id="about-section">
      <div id="about">
        <h2>Event Details</h2>

        <h3>Date & Location</h3>
        <p>
          <b>When:</b> July 10-12, 2026 (3 days)
          <br />
          <b>Where:</b> Sydney, Australia
          <br />
          <b>Ages:</b> 13-18 years old(inclusive)
        </p>

        <h3>What to Expect</h3>
        <p>
          Participants are expected to arrive before 1pm On July 10th and will
          leave at 1pm on July 12th. Accommodation will be provided at the
          venue.
        </p>
        <p>The venue is currently TBA (to be announced).</p>
        <p>
          Food will be provided for the duration of the event, and there will be
          accommodation provided for all dietary restrictions.
        </p>

        <p>
          Participants will sleep at the hackathon venue. We recommend you bring
          a sleeping bag!
        </p>

        <p>
          There will be background-checked staff on site for the entire event.
        </p>

        <p>
          Closer to the event, we'll be hosting pre-event calls to update you on
          logistics!
        </p>

        <h3>Are parents allowed to come?</h3>
        <p>
          Parents will <b>not</b> be allowed to stay in the venue, and will not
          be reimbursed for their travel or stay. They may check the venue to
          make sure it is safe under the supervision of staff if necessary.
        </p>

        <h3>Packing list</h3>
        <ul>
          <li>A sleeping bag</li>
          <li>Toiletries(toothbrush, toothpaste, etc.)</li>
          <li>A laptop and charger</li>
          <li>A refillable water bottle</li>
          <li>Any necessary medication</li>
        </ul>

        <h3>Questions?</h3>
        <p>
          Contact us at{" "}
          <a href="mailto:crux@horizons.hackclub.com">
            crux@horizons.hackclub.com
          </a>
        </p>
      </div>
    </div>
  );
}
