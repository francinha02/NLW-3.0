import {Router} from "express";
import OrphanagesController from "./controllers/OrphanagesController"
const routes = Router();

routes.post("/orphanages", async (request, response) => {
    OrphanagesController.create(request, response)
});

export default routes;