const { people } = require("../data");

const getPerson = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }

  res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }

  res.status(201).json({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res
      .status(404)
      .json({ success: false, msg: `no person with id:${id} exists` });
  } else {
    const newPeople = people.map((person) => {
      person.id === Number(id) ? (person.name = name) : null;
      return person;
    });
    res.status(200).send(newPeople);
  }
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    res.status(404).send(`a person with id:${id} doesnt exist`);
  } else {
    const newPeople = [...people].filter((person) => person.id !== Number(id));
    res.status(200).send(newPeople);
  }
};

module.exports = {
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
  createPersonPostman,
};
