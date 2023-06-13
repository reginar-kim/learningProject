const router = require("express").Router();
const { Campus } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll();
    res.send(allCampuses);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);

    if (!campus) {
      res.status(404).send();
    } else {
      res.status(200).send(campus);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.send(newCampus);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);

    if (!campus) {
      res.status(404).send();
    } else {
      await Campus.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(204).send();
    }
  } catch (error) {
    if (isNaN(req.params.id)) {
      res.status(400).send();
    } else {
      next(error);
    }
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    await campus.update(req.body);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
