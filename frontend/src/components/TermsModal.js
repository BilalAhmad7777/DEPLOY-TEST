import "./ConfirmationModal.css";

export default function TermsModal({
  role,
  readOnly = false,
  onAccept,
  onDecline,
  onClose,
}) {
  return (
    <div className="cm-overlay" onClick={!readOnly ? onDecline : onClose}>
      <div
        className="cm-box"
        style={{
          maxWidth: "850px",
          maxHeight: "85vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="cm-close"
          onClick={readOnly ? onClose : onDecline}
        >
          ✕
        </button>

        <h2 className="cm-title">
          {role === "organizer"
            ? "Organizer Rules & Guidelines"
            : "Student Rules & Guidelines"}
        </h2>

        {role === "student" ? (
  <>
  <h3>1. Account & Identity</h3>
  <ul className="cm-list">
    <li>Use your real name and college information.</li>
    <li>Upload a valid College ID for verification.</li>
    <li>Creating multiple or fake accounts is prohibited.</li>
  </ul>

  <h3>2. Event Registration</h3>
  <ul className="cm-list">
    <li>Register only if you genuinely intend to attend.</li>
    <li>Registration requests are subject to organizer approval.</li>
    <li>Waitlisted registrations are not guaranteed admission.</li>
  </ul>

  <h3>3. QR Ticket</h3>
  <ul className="cm-list">
    <li>Your QR ticket is personal and must not be shared.</li>
    <li>Attendance is recorded only through organizer QR scanning.</li>
    <li>After attendance is recorded, the ticket becomes invalid.</li>
  </ul>

  <h3>4. Event Participation</h3>
  <ul className="cm-list">
    <li>Follow all event instructions issued by organizers.</li>
    <li>Misuse of registrations or attendance may lead to restrictions.</li>
  </ul>

  <h3>5. Feedback</h3>
  <ul className="cm-list">
    <li>Only students who attended an event may submit ratings and feedback.</li>
    <li>Feedback should remain respectful and constructive.</li>
  </ul>

  <h3>6. Platform Usage</h3>
  <ul className="cm-list">
    <li>CampusConnect is intended only for genuine college event participation.</li>
    <li>Violation of these guidelines may result in suspension of your account.</li>
  </ul>
</>

) : (
    
  <>
  <h3>1. Event Creation</h3>
  <ul className="cm-list">
    <li>Create only genuine college events.</li>
    <li>Provide accurate event details, venue, and schedule.</li>
    <li>Registration deadlines must always be before the event date.</li>
  </ul>

  <h3>2. Event Editing & Deletion</h3>
  <ul className="cm-list">
    <li>Events cannot be edited within 7 days of the scheduled event date.</li>
    <li>Events cannot be deleted within 7 days of the scheduled event date.</li>
    <li>Completed events cannot be deleted.</li>
  </ul>

  <h3>3. Student Verification</h3>
  <ul className="cm-list">
    <li>Verify every student's College ID before approving registration.</li>
    <li>Reject registrations with invalid or suspicious information.</li>
    <li>Only approve students who satisfy the event requirements.</li>
  </ul>

  <h3>4. Registration Management</h3>
  <ul className="cm-list">
    <li>Maximum participant capacity cannot be reduced below the number of approved registrations.</li>
    <li>Manage waitlisted students fairly and responsibly.</li>
    <li>Do not approve duplicate or fraudulent registrations.</li>
  </ul>

  <h3>5. Attendance Rules</h3>
  <ul className="cm-list">
    <li>Attendance must only be recorded through QR code scanning.</li>
    <li>QR scanning is allowed only on the event date.</li>
    <li>Attendance cannot be modified once it has been recorded.</li>
    <li>Completed events no longer accept QR attendance.</li>
  </ul>

  <h3>6. Event Completion</h3>
  <ul className="cm-list">
    <li>Mark an event as completed only after the scheduled event time.</li>
    <li>Students can submit ratings and feedback only after the event is completed.</li>
  </ul>

  <h3>7. Platform Responsibility</h3>
  <ul className="cm-list">
    <li>Use CampusConnect only for official academic or college-related events.</li>
    <li>Providing misleading information or misusing the platform may result in organizer privileges being revoked.</li>
  </ul>
</>
)}

        <div className="cm-actions">
          {readOnly ? (
            <button
              className="cm-btn cm-btn-confirm"
              onClick={onClose}
            >
              Close
            </button>
          ) : (
            <>
              <button
                className="cm-btn cm-btn-cancel"
                onClick={onDecline}
              >
                Decline
              </button>

              <button
                className="cm-btn cm-btn-confirm"
                onClick={onAccept}
              >
                Accept & Continue
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}