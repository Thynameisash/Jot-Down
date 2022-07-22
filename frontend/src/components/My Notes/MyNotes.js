import React, { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import MainScreen from "../MainScreen";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";

const MyNotes = () => {
  const deleteNote = (id) => {
    if (window.confirm("Confirm your deletion")) {
    }
  };

  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const { data } = await axios.get("/notes");
    setNotes(data);
  };
  console.log(notes);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <MainScreen title="Hello Ash">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note.id}>
          <Card>
            <Accordion.Button as={Card.Text}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  {note.title}
                </span>
                <div>
                  <Button
                    href={`/note/${note.id}`}
                    variant="danger"
                    className="mx-2"
                  >
                    Edit
                  </Button>
                  <Button variant="warning" onClick={() => deleteNote(note.id)}>
                    Delete
                  </Button>
                </div>
              </Card.Header>
            </Accordion.Button>
            <Accordion.Body>
              <Card.Body>
                <h4>
                  <Badge bg="success">Category - {note.state}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>
                    {note.city}, {note.postcode}
                  </p>
                  <footer className="blockquote-footer">
                    Created on 21-July'23
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
