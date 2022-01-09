const Booking = artifacts.require("Booking");

contract("Booking", (accounts) => {
  let booking;
  let expectedPatient;
  //importing the Booking-contact and providing the available accounts

  before(async () => {
    booking = await Booking.deployed();
  });

  //Testing the book-function: book the appointment with id 3 and assign it to the account 0
  //should return the expected patient

  describe("booking an appointment and retrieving account addresses", async () => {
    before("book an appointment using accounts[0]", async () => {
      await booking.book(3, { from: accounts[0] });
      expectedPatient = accounts[0];
    });

    it("can fetch the address of a patient by appointment id", async () => {
      const patient = await booking.patients(3);
      assert.equal(
        patient,
        expectedPatient,
        "The owner of the booked appointment should be the first account."
      );
    });

    //Call the patients smart contract method to see the address of the patient who booked the appointment with Id 3.
    // Then we test the retrieval of all patients who booked an appointment.

    it("can fetch the collection of all pet owners' addresses", async () => {
      const patients = await booking.getPatients();
      assert.equal(
        patients[3],
        expectedPatient,
        "The owner of the adopted pet should be in the collection."
      );
    });
    //Then we compare the contract adress with the one whe should find.

    // Test the appointment ID (should be 0-5)
    it ("behaviour we ware looking for", async () => {
    get subject
    const ... = await ...
    assert.equal(..., bevorugster Wert, "error mesage")
    )
    });

    // Testing the access control of "ownable.sol"
    //it ("behaviour we ware looking for", async () => {
    //get subject
    //const ... = await ...
    //assert.equal(..., bevorugster Wert, "error mesage")
    //)
    //});

    // Book 3 appointments and return the lenth and the array of the adresses
    //it ("behaviour we ware looking for", async () => {
    //get subject
    //const ... = await ...
    //assert.equal(..., bevorugster Wert, "error mesage")
    //)
    //});
  });
});
