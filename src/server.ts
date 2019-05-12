import { WebClient } from "@slack/web-api";
import * as dotenv from "dotenv";

dotenv.config();
const token = process.env.SLACK_API_TOKEN;

console.log(token);
