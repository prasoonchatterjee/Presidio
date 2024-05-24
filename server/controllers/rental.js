const mongoose = require('mongoose');
const Rental = require('../models/rental');

const getAllRentals = async (req, res) => {
  const allRentals = await Rental.find();
  res.send(allRentals);
};
const createSingleRental = async (req, res) => {
  const {area,noOfBedRooms,noOfBathRooms,landMarks, ownerId} = req.body;
  const rental = Rental.create({area,noOfBedRooms,noOfBathRooms,landMarks,ownerId});
  res.json(rental);

};
const getSingleRental = async (req, res) => {
  const {_id} = req.body;
  const rental = Rental.findById(_id);
  res.json(rental);
};
const deleteSingleRental = async (req, res) => {};
const updateSingleRental = async (req, res) => {};

module.exports = {
  getAllRentals,
  createSingleRental,
  getSingleRental,
  deleteSingleRental,
  updateSingleRental
}