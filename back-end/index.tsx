const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.listen(port);

app.get("/vehicles", async (req, res) => {
  const data = await prisma.vehicle.findMany();
  res.send(data);
});

app.get("/users", async (req, res) => {
  const data = await prisma.user.findMany();
  res.send(data);
});

app.post("/users", async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        licenseNumber: req.body.licenseNumber,
        type: req.body.type,
        password: req.body.password,
        site: {
          connect: { address: req.body.siteAddress },
        },
      }
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});
