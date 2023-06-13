const router = require("express").Router();
const { Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Student.findAll();
    res.send(allStudents);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).send();
    } else {
      res.status(200).send(student);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newStudent = await Student.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      campusId: req.body.campusId,
      image: req.body.image || "https://i.pinimg.com/originals/c8/cf/8f/c8cf8f604735ce62812c8482f7b99523.jpg",
      gpa: req.body.gpa,
    });
    res.send(newStudent);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findByPk(studentId);

    if (!student) {
      res.status(404).send();
    } else {
      const removeStudent = await Student.destroy({
        where: {
          id: studentId,
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
    const student = await Student.findByPk(req.params.id);
    await student.update(req.body);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
