const Contact = require("./Contact");

exports.getAllContact = async (req, res) => {
  Contact.find()
    .then((contacts) => {
      res.render("index", { contacts, error: {} });
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ messaage: e.message });
    });
};
exports.getSingleContact = (req, res) => {
  let { id } = req.params;
  Contact.findById(id)
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ messaage: e.message });
    });
};
exports.createContact = (req, res) => {
  let { name, email, phone } = req.body;
  let error = {};
  if (!name) {
    error.name = "please enter your name"
  } if (!email) {
    error.email = "please enter your email"
  } if (!phone) {
    error.phone = "please enter your phone"
  }
  let isError = Object.keys(error).length > 0;
  if (isError) {
     Contact.find()
       .then((contacts) => {
         res.render("index", { contacts, error });
         console.log(error,contacts)
       })
       .catch((e) => {
         console.log(e);
         res.status(500).json({ messaage: e.message });
       });
  }
  let newContacts = new Contact({ name, email, phone });
  newContacts
    .save()
    .then(() => {
      Contact.find().then((contacts) => {
        // console.log(contacts)
         res.render("index", { contacts, error: {} })
      })
    })
    .catch((e) => {
      console.error(e);
      res.status(500).json({ error: e.message});
    });
};
exports.updateContact = (req, res) => {
  let { name, email, phone } = req.body;
  let { id } = req.params;
  Contact.findOneAndUpdate({ _id: id }, { name, email, phone }, { new: true })
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((e) => {
      console.error(e);
      res.status(500).json({ error: "Failed to create contact" });
    });
};
exports.deleteContact = (req, res) => {
  let { id } = req.params;
  Contact.findOneAndDelete({ _id: id })
    .then(() => {
      Contact.find()
        .then(contacts => {
        res.render("index",{contacts,error:{}})
      })
    })
    .catch((e) => {
      console.error(e);
      res.status(500).json({ error: "Failed to create contact" });
    });
};
