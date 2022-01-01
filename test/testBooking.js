const Booking = artifacts.require("Booking");

contract("Booking", (accounts) => {
  let booking;
  let expectedPatient;
  //importing the Booking-contact and providing the available accounts

  before(async () => {
      booking = await Booking.deployed();
  });

  describe("adopting a pet and retrieving account addresses", async () => {
    before("adopt a pet using accounts[0]", async () => {
      await booking.book(3, { from: accounts[0] });
      expectedPatient = accounts[0];
    });

//Testing the book-function: book the appointment with id 3 and assign it to the account 0 
//should return the expected patient
    
      it("can fetch the address of an owner by pet id", async () => {
        const patient = await booking.patients(3);
        assert.equal(patient, expectedPatient, "The owner of the adopted pet should be the first account.");
      });
    
  //Call the patients smart contract method to see the address of the patient who booked the appointment with Id 3.
  // Then we test the retrieval of all patients who booked an appointment.

      it("can fetch the collection of all pet owners' addresses", async () => {
        const patients = await booking.getPatients();
        assert.equal(patients[3], expectedPatient, "The owner of the adopted pet should be in the collection.");
      });
    }); 
  })
  //Then we compare the contract adress with the one whe should find. 





 