const { red } = require("chalk");
const { Campus, Student, db } = require("./server/db");


const seed = async () => {
  try {
    await db.sync({ force: true });

    //* Campus seed data region

    const Oxford = await Campus.create({
      name: "University of Oxford",
      address: "Oxford OX1 2JD, UK",
      description:
        "Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen.",
      image: "https://cdn.britannica.com/03/117103-050-F4C2FC83/view-University-of-Oxford-England-Oxfordshire.jpg", 
    });
    await Oxford.save();

    const Cambridge = await Campus.create({
      name: "University of Cambridge",
      address: "The Old Schools, Trinity Ln, Cambridge CB2 1TN, UK",
      description:
        "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.",
      image: "https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-580x288/public/study-at-cambridge-undergraduate-883x432.jpg?itok=xrkkc53X",
    });
    await Cambridge.save();

    const Hogwarts = await Campus.create({
      name: "Hogwarts School of Witchcraft and Wizardry",
      address: "1600 Pennsylvania Avenue NW",
      description:
        "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth gastropub cornhole celiac swag. Brunch raclette post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag.",
      image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/06/15/university-of-sydney.jpg?width=1200",
    });
    await Hogwarts.save();
    //* end region

    //* student seed data region

    const Yambao = await Student.create({
      firstName: "Zoey",
      lastName: "Yambao",
      email: "imamiesboss@zoey.com",
      gpa: 3.5,
      campusId: 1,
      image: "https://i.pinimg.com/originals/38/21/64/3821646b72accfddc8013eab33704f1e.jpg",
    });
    await Yambao.save();

    const Dispo = await Student.create({
      firstName: "Duke",
      lastName: "Dispo",
      email: "starring_starring@gmail.com",
      gpa: 1.5,
      campusId: 2,
      image: "https://i.pinimg.com/originals/e3/94/ba/e394ba7a59150338b38b1b8c82f27a5b.jpg",
    });
    await Dispo.save();

    const Reynolds = await Student.create({
      firstName: "Kelvin",
      lastName: "Reynolds",
      email: "bigpharma@moderna.com",
      gpa: 4,
      campusId: 2,
      image: "https://i.pinimg.com/736x/61/e4/49/61e449f401e07956598401680a23342c.jpg",
    });
    await Reynolds.save();

    const Mouse = await Student.create({
      firstName: "Ruby",
      lastName: "Mouse",
      email: "disney@world.com",
      gpa: 3,
      campusId: 1,
      image: "https://i.pinimg.com/564x/4d/c2/b9/4dc2b9c27fd6cf9da48115292f45b713.jpg",
    });
    await Mouse.save();

    const Purnell = await Student.create({
      firstName: "Taneisha",
      lastName: "Purnell",
      email: "taneisha@jetblue.com",
      gpa: 2.5,
      campusId: 3,
      image: "https://i.pinimg.com/564x/47/e6/90/47e690e53642807207624785aa66ff38.jpg",
    });
      await Purnell.save();

      const Shakira = await Student.create({
        firstName: "Cristina",
        lastName: "Shakira",
        email: "ck@lamar.com",
        gpa: 2,
        campusId: 3,
        image: "https://i.pinimg.com/564x/9a/6c/59/9a6c59bbad10f56ba4e58f26ac61dd23.jpg",
      });
      await Shakira.save();

  } catch (err) {
    console.log(red(err));
  }
};
//* end region

async function runSeed() {
  try {
    await seed();
    console.log("Ah! there there! All good!");
  } catch (err) {
    console.error("STOP! This is VERY BAD!");
    console.error(err);
  } finally {
    db.close();
  }
}

if (require.main === module) {
  runSeed();
}
