const Booking = artifacts.require("Booking");

contract("Booking", (accounts) => {
  let booking;
  let expectedPatient;
  //Importing the Booking-contact and providing the available accounts

  before(async () => {
    booking = await Booking.deployed();
  });

  //Make sure, the contract gets deployed correctly
  describe("deployment", () => {
    it("deploys successfully", async () => {
      const address = booking.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });
  });

  //Testing the book-function: book the appointment with id 0 and assign it to the account 0
  //Should return the expected patient
  describe("booking an appointment and retrieving account addresses", async () => {
    before("book an appointment using accounts[0]", async () => {
      await booking.book(0, { from: accounts[0] });
      expectedPatient = accounts[0];
    });

    it("can fetch the address of a patient by appointment id", async () => {
      const patient = await booking.patients(0);
      assert.equal(
        patient,
        expectedPatient,
        "The owner of the booked appointment should be the first account."
      );
    });

    //Call the patient's smart contract method to see the address of the patient who booked the appointment with Id 0
    // Then we test the retrieval of all patients who booked an appointment and compare the contract adress with the one whe should find
    it("can fetch the collection of all patient's owners' addresses", async () => {
      const patients = await booking.getPatients();
      assert.equal(
        patients[0],
        expectedPatient,
        "The owner of the booked appointment should be in the collection."
      );
    });

    //Test the appointment ID (should be 0-5), otherwise we get an error the maximum amount of appointments is reached
    it("should not accept more appointments than 6", async () => {
      await booking.book(1, { from: accounts[0] });
      await booking.book(2, { from: accounts[0] });
      await booking.book(3, { from: accounts[0] });
      await booking.book(4, { from: accounts[0] });
      await booking.book(5, { from: accounts[0] });
      await booking.book(6, { from: accounts[0] }).catch((error) => {
        assert.equal(
          error.message,
          "Returned error: VM Exception while processing transaction: revert Maximum number of appointment bookings is reached -- Reason given: Maximum number of appointment bookings is reached."
        );
      });
    });

    // Get back the number of bookings, should not be more than 6
    it("should return the number of bookings", async () => {
      const bookings = await booking.getPatients();
      assert.equal(bookings.length, 6);
    });
  });
});
