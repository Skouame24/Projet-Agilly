import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { entrepriseSaveSchema } from "./schema.js";
import morgan from "morgan";

dotenv.config();

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.post("/entreprise", async (req, res) => {
  const { value, error } = entrepriseSaveSchema.validate(req.body);
  console.log(value);
  if (error != undefined) {
    return res.status(400).send({ error });
  }
  const entreprise = await prisma.entreprise.create({ data: value });
  res.status(200).send({ entreprise });
});

app.get("/entreprise", async (req, res) => {
  const entreprises = await prisma.entreprise.findMany();

  res.status(200).send({entreprises});
});



app.listen(port, () => {
  console.log("Server running on port ", port);
});
