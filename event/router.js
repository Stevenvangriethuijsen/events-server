const { Router } = require("express");
const Event = require("./model");

const router = new Router();

router.post("/event", async (req, res, next) => {
  try {
    const createEvent = await Event.create(req.body);
    res.status(201).json(createEvent);
  } catch (err) {
    next(err);
  }
});

router.get("/event", async (req, res, next) => {
  try {
    const findAllEvents = await Event.findAll();
    if (findAllEvents) {
      res.json(findAllEvents);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
});

router.get("/event/:id", async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const singleEvent = await Event.findByPk(eventId);
    if (singleEvent) {
      res.json(singleEvent);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
});

router.put("/event/:id", async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const updateEvent = await Event.findByPk(eventId);
    const updated = await updateEvent.update(req.body);
    res.send(updated);
  } catch (err) {
    next(err);
  }
});

router.delete("/event/:id", async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const destroyEvent = await Event.destroy({ where: { id: eventId } });
    res.send({ destroyEvent });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
