import express, { urlencoded } from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import BrandRoutes from "./routes/brandRoutes.js";
import { reqLog } from "./middlewares/logMiddleware.js";
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);

app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));

app.use(helmet());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 10, // limit each IP to 1000 requests per windowMs
  message: `<main style='width:100vw; height:100vh;flex-direction:column; background:grey; display:flex; justify-content:center;align-items:center;'>
    <h1 style='color:white;'>Too many requests from this IP, please try again later.<h1>
   <br/>
   <a href='' style='display:block !important;'><button style='width:200px; height:50px; font-size:2rem; border-radius:5px; cursor:pointer;'>Retry</button></a>
    </main>`,
});
app.use(limiter);
app.use(reqLog);
app.use("/api", BrandRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Backend Server is up and running",
  });
});
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "The Creative Studios Api is running...",
  });
});
export default app;
