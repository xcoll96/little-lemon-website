const BookingForm = ({
  availableTimes,
  formData,
  formErrors,
  isSubmitEnabled,
  updatedTimes,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  console.log(formErrors);
  return (
    <form data-testid="booking-form" onSubmit={handleSubmit}>
      <div className="two-col-row">
        <div>
          <label htmlFor="first-name">
            First Name<span className="mandatory">*</span>
          </label>
          <input
            className={`${formErrors.firstName ? "input-error" : ""}`}
            data-testid="first-name"
            aria-required="true"
            required
            type="text"
            id="first-name"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            onBlur={(e) => handleBlur("firstName", e.target.value)}
          />
          <p className="input-error-message">{formErrors.firstName}</p>
        </div>
        <div>
          <label htmlFor="last-name">
            Last Name<span className="mandatory">*</span>
          </label>
          <input
            className={`${formErrors.lastName ? "input-error" : ""}`}
            data-testid="last-name"
            aria-required="true"
            required
            type="text"
            id="last-name"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            onBlur={(e) => handleBlur("lastName", e.target.value)}
          />
          <p className="input-error-message">{formErrors.lastName}</p>
        </div>
      </div>
      <div className="one-col-row">
        <label htmlFor="email">
          Email<span className="mandatory">*</span>
        </label>
        <input
          className={`${formErrors.email ? "input-error" : ""}`}
          data-testid="email"
          aria-required="true"
          required
          type="email"
          pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={(e) => handleBlur("email", e.target.value)}
        />
        <p className="input-error-message">{formErrors.email}</p>
      </div>
      <div className="two-col-row">
        <div>
          <label htmlFor="date">
            Reservation Date<span className="mandatory">*</span>
          </label>
          <input
            className={`${formErrors.reservationDate ? "input-error" : ""}`}
            data-testid="date"
            aria-required="true"
            required
            type="date"
            id="date"
            value={formData.reservationDate}
            onChange={(e) => {
              handleChange("reservationDate", e.target.value);
              updatedTimes(e.target.value);
            }}
            onBlur={(e) => handleBlur("reservationDate", e.target.value)}
          />
          <p className="input-error-message">{formErrors.reservationDate}</p>
        </div>
        <div>
          <label htmlFor="reservation-time">
            Reservation Time<span className="mandatory">*</span>
          </label>
          <select
            className={`${formErrors.reservationTime ? "input-error" : ""}`}
            data-testid="reservation-time"
            aria-required="true"
            required
            id="reservation-time"
            onChange={(e) => handleChange("reservationTime", e.target.value)}
            onBlur={(e) => handleBlur("reservationTime", e.target.value)}
          >
            <option>Please select a time...</option>
            {availableTimes
              .filter((time) => time.available)
              .map((availableTime) => (
                <option key={availableTime.timeSlot}>
                  {availableTime.timeSlot}
                </option>
              ))}
          </select>
          <p className="input-error-message">{formErrors.reservationTime}</p>
        </div>
      </div>
      <div className="two-col-row">
        <div>
          <label htmlFor="guests">
            Number of guests<span className="mandatory">*</span>
          </label>
          <input
            className={`${formErrors.guests ? "input-error" : ""}`}
            data-testid="guests"
            type="number"
            id="guests"
            aria-required="true"
            required
            placeholder="1"
            min="1"
            max="10"
            onChange={(e) => handleChange("guests", e.target.value)}
            onBlur={(e) => handleBlur("guests", e.target.value)}
          />
          <p className="input-error-message">{formErrors.guests}</p>
        </div>
        <div></div>
      </div>
      <input
        aria-label="Submit"
        data-testid="submit"
        className={`primary-btn ${!isSubmitEnabled ? "disabled" : ""}`}
        type="submit"
        value="Reserve"
        disabled={!isSubmitEnabled}
      />
    </form>
  );
};

export default BookingForm;
