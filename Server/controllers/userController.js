import asyncHandler from "express-async-handler"
import { prisma } from "../config/prismaConfig.js"

export const createUser = asyncHandler(async (req, res) => {
    console.log(`Creating a User`)

    let { email } = req.body;
    const userExists = await prisma.user.findUnique({ where: { email: email } })

    if (!userExists) {
        const user = await prisma.user.create({ data: req.body });
        res.send({
            message: "User registered successfully",
            user: user
        });
    }
    else {
        res.status(201).json({ message: "User already registered" })
    }
})

// function to book a visit to resd
export const BookedVisit = asyncHandler(async (req, res) => {
    console.log(`Booking a visit`)

    let { email, date } = req.body;
    let { id } = req.params

    try {
        const AlreadyBooked = await prisma.user.findUnique({
            where: { email },
            select: { bookedVisits: true }
        })

        if (AlreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
            res.status(400).json({ message: "Already Booked sir" })
        }
        else {
            await prisma.user.update({
                where: { email: email },
                data: {
                    bookedVisits: { push: { id, date } }
                }
            });
            res.json({
                message: "you have successfully booked a visit"
            })
        }
    } catch (error) {
        throw new Error(error.message);
    }
})

// funtion to get all bookings of a user
export const allBookings = asyncHandler(async (req, res) => {
    const { email } = req.body
    try {
        const Bookings = await prisma.user.findUnique({
            where: { email },
            select: { bookedVisits: true }
        })
        if (Bookings) {
            res.status(200).send(Bookings)
        } else {
            res.status(401).send("No Bookings")
        }
    } catch (error) {
        throw new Error(error.message)
    }
})

// function to cancel the booking
export const cancelBooking = asyncHandler(async (req, res) => {
    const {email} = req.body;
    const { id } = req.params

    try {

        const user = await prisma.user.findUnique({
            where: { email: email },
            select: { bookedVisits: true }
        })

        const index = user.bookedVisits.findIndex((visit) => visit.id === id )

        if (index === -1) {
            res.status(404).json({ message: "Booking not found" })
        } else {
            user.bookedVisits.splice(index, 1)
            await prisma.user.update({
                where: { email },
                data: {
                    bookedVisits: user.bookedVisits
                },
            });
            res.send("Booking cancelled successfully");
        }

    } catch (error) {
        throw new Error(error.message)
    }
})

// function to add a resd in favourite list of a user
export const toFav = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { rid } = req.params;
  
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });
  
      if (user.favResidenciesID.includes(rid)) {
        const updateUser = await prisma.user.update({
          where: { email },
          data: {
            favResidenciesID: {
              set: user.favResidenciesID.filter((id) => id !== rid),
            },
          },
        });
  
        res.send({ message: "Removed from favorites", user: updateUser });
      } else {
        const updateUser = await prisma.user.update({
          where: { email },
          data: {
            favResidenciesID: {
              push: rid,
            },
          },
        });
        res.send({ message: "Updated favorites", user: updateUser });
      }
    } catch (err) {
      throw new Error(err.message);
    }
  });
  


// function to get all favorites
export const getAllFavorites = asyncHandler(async (req, res) => {
    const { email } = req.body;
    try {
      const favResd = await prisma.user.findUnique({
        where: { email },
        select: { favResidenciesID: true },
      });
      res.status(200).send(favResd);
    } catch (err) {
      throw new Error(err.message);
    }
  });
