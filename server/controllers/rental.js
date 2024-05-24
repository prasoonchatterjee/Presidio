const mongoose = require('mongoose');
const Rental = require('../models/rental');
const ObjectId = require('mongodb').ObjectId;

const getAllRentals = async (req, res) => {
  const allRentals = await Rental.find();
  res.send(allRentals);
};
const createSingleRental = async (req, res) => {
  const {area,noOfBedRooms,noOfBathRooms,landMarks, ownerId} = req.body;
  const rental = await Rental.create({area,noOfBedRooms,noOfBathRooms,landMarks,ownerId});
  res.json(rental);

};
const getSingleRental = async (req, res) => {
  const {id} = req.params;
  const rentalId = new ObjectId(id);
  const rental = await Rental.findById(rentalId);
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